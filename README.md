# serverless
Repo for serverless practices

# setup config:
serverless config credentials --provider aws --key xxx --secret xxx --profile xxx

# create function:
sls create --template aws-nodejs --path xxx

# deploy function:
sls deploy -v

# invoke function with logs:
sls invoke -f <function-name> -l

# deploy only function:
sls deploy function -f <function-name>