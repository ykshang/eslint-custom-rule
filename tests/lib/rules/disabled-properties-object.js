var ruleTester = new RuleTester();
ruleTester.run("disabled-properties-object", rule, {
  valid: ["function test(d, e, f) {}"],
  invalid: [
    {
        code: "function test(a, b, c, d) {}",
        errors: [{
            message: "参数最多不能超过3个",
        }]
    },
  ],
});