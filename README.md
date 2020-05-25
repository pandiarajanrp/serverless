### serverless
Repo for serverless practices

### setup config:
serverless config credentials --provider aws --key xxx --secret xxx --profile xxx

### create function:
sls create --template aws-nodejs --path xxx

### deploy function:
sls deploy -v

### deploy only function:
sls deploy function -f <function-name>

### invoke function with logs:
sls invoke -f <function-name> -l

### remove/destory function:
sls remove

### timeout and memorySize:
we can config timeout and memorySize in provider(global) and function level
provider:
  memorySize: xx #MB
  timeout: xx #sec
functions:
  <function-name>:
    memorySize: xx #MB
    timeout: xx #sec

### iamRoleStatements:
iamRoleStatements:
  - Effect: "Allow"
    Action:
      - "s3:ListBucket"
    Resource: 
      - "*"

### environment:
provider:
  environment:
    ENV_NAME: "root env variable"
functions:
  <function-name>:
    ENV_NAME: "function env variable"

### environment:
provider:
  vpc:
    securityGroupIds:
      - securityGroupId1
    subnetIds:
      - subnetId1
      - subnetId2
functions:
  <function-name>:
    vpc:
      securityGroupIds:
        - securityGroupId1
      subnetIds:
        - subnetId1
        - subnetId2