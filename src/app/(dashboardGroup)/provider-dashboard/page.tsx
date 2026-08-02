import { getGear } from "@/services/gear/getGear";

const ProviderDashPage = async () => {
  const result = await getGear();

  console.log(result);
  return (
    <div>
      <h1>provider</h1>
    </div>
  );
};

export default ProviderDashPage;
