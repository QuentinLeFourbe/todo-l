import { useState } from "react";

function useNewId(firstId: number) {
  const [id, setId] = useState(firstId);

  const getNewId = () => {
    const resId = id;
    setId(id + 1);
    console.log(id);
    return resId;
  };

  return getNewId;
}

export default useNewId;
