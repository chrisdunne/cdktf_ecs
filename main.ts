import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { AwsProvider, Instance } from './.gen/providers/aws';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, 'aws', {
      region: 'eu-west-2'
    });

    new Instance(this, 'cdktf_instance', {
      ami: "ami-0376206bb575c76dd",
      instanceType: "t2.micro"
    });
  }
}

const app = new App();
new MyStack(app, 'cdktf_ecs');
app.synth();