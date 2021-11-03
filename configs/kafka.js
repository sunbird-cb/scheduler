/**
 * name : kafka.js
 * author : Rakesh Kumar
 * Date : 03-Nov-2022
 * Description : Contains kafk connection
 */
const kafka = require('kafka-node');
const emailNotifications = require("../generics/helpers/email-notifications");


module.exports = function (config) {

  Producer = kafka.Producer
  KeyedMessage = kafka.KeyedMessage
  client = new kafka.KafkaClient({
    kafkaHost: process.env.KAFKA_HOST
  })

  client.on('error', function (error) {
    console.error.bind(console, "kafka connection error!")
  });

  producer = new Producer(client)

  producer.on('ready', function () {
    console.log("Connected to Kafka");
  });

  producer.on('error', function (err) {
    console.error.bind(console, "kafka producer creation error!")
  })


  let consumer = new kafka.ConsumerGroup({
      kafkaHost: process.env.KAFKA_HOST,
      // groupId : process.env.KAFKA_GROUP_ID,
      autoCommit: true
    },
    process.env.KAFKA_TOPIC
  );

  consumer.on('message', async function (message) {
    
    // { "type":"email", "email" : {  "to":"rakesh.doddmane@gmail.com","body":"hi","subject":"hi" } }
   
    
    try {
      let notificationData = JSON.parse(message.value);
      if(notificationData.type=="email" && notificationData.email){
        console.log("kafka email ----- ", notificationData.email);
        emailNotifications.sendEmail(notificationData.email);
      }
      
    } catch (error) {
      console.log("failed", error);
    }
  

  });

  consumer.on('error', async function (error) {
    console.log("kafka incoming error", error);
  });


  global.kafkaClient = {
    kafkaProducer: producer,
    kafkaClient: client,
    kafkaKeyedMessage: KeyedMessage
  };

};