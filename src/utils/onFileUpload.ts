import AWS from 'aws-sdk';
import { ChangeEvent } from 'react';

import mainInstance from './api/main';

const AWS_S3_PREFIX = 'https://git-talk.s3.ap-northeast-2.amazonaws.com/';

const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
  const REGION = 'ap-northeast-2';
  const S3_BUCKET = 'git-talk';

  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });
  const target = e.currentTarget;
  const file = (target.files as FileList)[0];

  const params = {
    ACL: 'public-read',
    Body: file,
    Bucket: S3_BUCKET,
    Key: `${new Date().getTime()}-${file.name}`,
  };

  myBucket
    .putObject(params)
    .on('httpUploadProgress', () => {
      mainInstance.updateProfileImage(`${AWS_S3_PREFIX}${params.Key}`);
    })
    .send((err) => {
      if (err) console.log(err);
    });
};

export default onFileUpload;
