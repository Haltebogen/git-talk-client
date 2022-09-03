import AWS from 'aws-sdk';

const onFileUpload = (e: any) => {
  const REGION = 'ap-northeast-2';
  const S3_BUCKET = 'git-talk';

  AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const file = e.target.files[0];

  const params = {
    ACL: 'public-read',
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name,
  };

  myBucket
    .putObject(params)
    .on('httpUploadProgress', (evt) => {
      alert('SUCCESS');
    })
    .send((err) => {
      if (err) console.log(err);
    });
};

export default onFileUpload;
