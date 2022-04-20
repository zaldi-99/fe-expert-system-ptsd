const ctx = {
  answer1: "test",
};

ctx["answer2"] = "test";

const setter = (key, value) => {
    ctx[key] = value;
}

setter('weight1', 50);