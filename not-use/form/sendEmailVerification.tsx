import SendVerifikasi from "../../firebase/sendVerifikasi";

export default function SendEmailVerification({ context }: any) {
  const verivication = () => {
    SendVerifikasi();
  };
  if (context.data.isVerified) {
    return <></>;
  } else {
    return (
      <>
        <button className="bg-blue-600" onClick={verivication}>
          Send email verivication
        </button>
      </>
    );
  }
}
