import { f1, f2 } from "./common";

const context = {
  featureFlag: false
}

if (context.featureFlag) {
  f1();
  console.log(f1())
} else {
  f2();
  console.log(f2())
}
