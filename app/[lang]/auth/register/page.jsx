import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[400px] p-6 bg-background rounded-md border border-border">
        <div className="text-2xl font-bold text-center text-default-800 mb-4">
          Register
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
