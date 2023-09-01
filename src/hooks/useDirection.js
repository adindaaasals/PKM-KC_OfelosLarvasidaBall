import React, { useRef, useState } from "react";
import { ref, child, update } from "firebase/database";
import { firebase } from "@/firebase/firebase-config";

const useDirection = () => {
  const [loading, setLoading] = useState(false);
  const error = useRef(null);
  const success = useRef(null);

  const updateDirection = async (path, value) => {
    setLoading(true);
    try {
      const rootRef = ref(firebase);
      const dbPath = child(rootRef, path);
      await update(dbPath, value);
      success.current = true;
    } catch (updateError) {
      error.current = updateError.message;
    }
    setLoading(false);
  };

  return { loading, error: error.current, success: success.current, updateDirection };
};

export default useDirection;
