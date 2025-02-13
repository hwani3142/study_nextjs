import { getSession } from "next-auth/react";

import UserProfile from "../components/profile/user-profile";

function ProfilePage() {
  return <UserProfile />;
}

// 클라이언트사이드에서 세션검사를 하게되면 어쩔수없이 화면 깜빡임과 동시에 리다이렉션된다
// 이를 막기 위해 서버사이드에서 세션을 미리 검사하여, 렌더링 시 바로 리다이렉션되게 하고 사용성을 높인다
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
