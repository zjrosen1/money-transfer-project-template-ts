// @@@SNIPSTART money-transfer-project-template-ts-start-workflow
import { Connection, WorkflowClient } from '@temporalio/client';
import { moneyTransfer } from './workflows';
import type {PaymentDetails} from './shared';

import { namespace, taskQueueName } from './shared';

async function run() {
  const connection = await Connection.connect({});
  const client = new WorkflowClient({ connection, namespace });

  const details: PaymentDetails = {
    amount: 400,
    sourceAccount: "100",
    targetAccount: "200",
  };

	console.log(`Starting transfer from account ${details.sourceAccount} to account ${details.targetAccount} for ${details.amount}`)

  const handle = await client.start(moneyTransfer, {
    args: [details],
    taskQueue: taskQueueName,
    workflowId: 'pay-invoice-801',
  });

  console.log(`Started workflow ${handle.workflowId} with RunID ${handle.firstExecutionRunId}`);
  console.log(await handle.result());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
// @@@SNIPEND
