import { useState } from "react";
import { useAuth } from "../../hooks";
import * as Styles from "./styles";
import { LoginParams } from "../../contexts";

export default function LoginPage() {
  const { handleLogin } = useAuth();
  const [loginKeys, setLoginKeys] = useState<LoginParams>({
    publicKey: "",
    privateKey: "",
  });

  function handleChangeValue(value: string, key: keyof LoginParams) {
    const formattedValue = value.trim();
    setLoginKeys((prev) => ({ ...prev, [key]: formattedValue }));
  }

  function handleSubmit() {
    if (!loginKeys.publicKey || !loginKeys.privateKey) return;
    handleLogin(loginKeys);
  }

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <input onBlur={(e) => handleChangeValue(e.target.value, "publicKey")} />
      <input onBlur={(e) => handleChangeValue(e.target.value, "privateKey")} />
      <button type="submit">Sign In</button>
    </Styles.Container>
  );
}
