var ruleTester = new RuleTester();
ruleTester.run("max-params", rule, {
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