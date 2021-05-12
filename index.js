'use strict';

const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');

const client = new S3Client({ region: 'us-west-2' });

const command = new ListObjectsV2Command({ Bucket: 'simonebucket2' });

exports.handler = async (event, context, callback) => {
  console.log('event details', JSON.stringify(event, undefined, 2));
  try {
    const data = await client.send(command);
    console.log('event data', JSON.stringify(data));
  } catch (error) {
    console.log('there is an error');
  }
}