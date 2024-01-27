import { useState } from "react";
import { useAuth } from "../../hooks";
import * as Styles from "./styles";
import { LoginParams } from "../../contexts";
import { Layout } from "../../styles/global";

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
    <Layout>
      <Styles.Container>
        <Styles.Content onSubmit={handleSubmit}>
          <img src="marvel_logo.png" alt="MARVEL LOGO" />
          <Styles.SubContent>
            <Styles.InputGroup>
              <span>Public Key</span>
              <input
                placeholder="Enter your public key"
                onBlur={(e) => handleChangeValue(e.target.value, "publicKey")}
              />
            </Styles.InputGroup>
            <Styles.InputGroup>
              <span>Private Key</span>
              <input
                placeholder="Enter your private key"
                onBlur={(e) => handleChangeValue(e.target.value, "privateKey")}
              />
            </Styles.InputGroup>
          </Styles.SubContent>
          <Styles.SignInButton type="submit">Sign In</Styles.SignInButton>
        </Styles.Content>
      </Styles.Container>
    </Layout>
  );
}
