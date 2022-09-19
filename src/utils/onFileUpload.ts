import AWS from 'aws-sdk';
// 현재 사용되지 않아 잠시 주석
// import subInstance from './api/sub';

// const AWS_S3_PREFIX = 'https://git-talk.s3.ap-northeast-2.amanzonaws.com/';

const onFileUpload = (e: any) => {
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

  const file = e.target.files[0];

  const params = {
    ACL: 'public-read',
    Body: file,
    Bucket: S3_BUCKET,
    Key: `${new Date().getTime()}-${file.name}`,
  };

  myBucket
    .putObject(params)
    .on('httpUploadProgress', (e, re) => {
      // TODO:  profile-image 수정 요청. 임시 주석처리
      // subInstance.updateProfile(`${AWS_S3_PREFIX}${params.Key}`);
      // s3 버킷에는 올라감
    })

    .send((err) => {
      if (err) console.log(err);
    });
};

export default onFileUpload;
