export const config = {
  'username': 'username',
  'password': 'password',
  'database': 'postgres',
  'host': 'third-project.cdivd2oc1rwt.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'profile',
  'aws_media_bucket': 'third-project-dev',
  'url': 'http://localhost:8100',
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
