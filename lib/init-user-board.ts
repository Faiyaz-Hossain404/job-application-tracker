import connectDB from "./db";
import { Board } from "./models";

export async function initializeUserBoard(userId: string) {
  try {
    await connectDB();

    // check if board exists
    await Board.findOne({userId, name:f "Job Hunt" })
  } catch (err) {
    throw err;
  }
}
