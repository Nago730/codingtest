const solution = b => b.filter(v => /^(?!.*?(aya|ye|woo|ma)\1)(aya|ye|woo|ma)+$/.test(v)).length;
