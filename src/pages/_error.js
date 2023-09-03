import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout title="Something Goes Wrong" footer={false}>
      <p className="text-center">
        {statusCode
          ? `Could not load your user data: Status code ${statusCode}`
          : "Coud not get that page, sorry."}
      </p>
    </Layout>
  );
};

export default _error;
