const accountId = context.accountId ?? "hack.near";
const daoId = props.daoId ?? "build.sputnik-dao.near";

const page = accountId
  ? Social.get(`${accountId}/settings/dao/page`)
  : undefined;

if (page === null) {
  return "Loading...";
}

const daoPage = accountId
  ? Social.get(`${daoId}/settings/dao/page`)
  : undefined;

if (daoPage === null) {
  return "Loading...";
}

return <Widget src={page ?? daoPage} props={props} />;
