'use-strict';

import fs from 'fs';

type CovDetail = {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
};

type CovInfo = {
  lines: CovDetail;
  statements: CovDetail;
  functions: CovDetail;
  branches: CovDetail;
  branchesTrue: CovDetail;
};

type Cov = {
  total: CovInfo;
  [s: string]: CovInfo;
};

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

const filePath = process.argv[2];
const coverage = JSON.parse(fs.readFileSync(filePath).toString()) as Cov;

let count = 0;
let total = 0;
for (let idx = 0; idx < Object.keys(coverage.total).length; idx += 1) {
  const info = Object.values(coverage.total)[idx];
  total += info.pct;
  count += 1;
}

const pct = Math.round(total / count);
let color = 'red';

if (pct > 80) {
  color = 'green';
} else if (pct > 40) {
  color = 'yellow';
}

process.stdout.write(`${pct};${color}`);
