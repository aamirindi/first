const { z } = require("zod");

// Object Schema
const singupSchema = z.object({
  username: z
    .string({ require_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of atleast 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ require_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of atleast 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ require_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone Number must be of atleast 10 characters" })
    .max(20, { message: "Phone Number not be more than 20 characters" }),
  password: z
    .string({ require_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be of atleast 7 characters" })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

module.exports = singupSchema;
