import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  name: {
    ar: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
  },
  description: {
    ar: {
      type: String
    },
    en: {
      type: String
    }
  }
});

const categories = mongoose.model("Categories", categoriesSchema);
export default categories;
