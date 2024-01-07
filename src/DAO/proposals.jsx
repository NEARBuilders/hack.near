const daoId = props.daoId ?? "multi.sputnik-dao.near";

const proposals = Near.view(daoId, "get_proposals", {
  from_index: 0,
  limit: 888,
});

State.init({
  daoId,
});

const onChangeDAO = (daoId) => {
  State.update({
    daoId,
  });
};

return (
  <>
    <div>
      <h3>DAO Proposals</h3>
      <div className="mb-2">
        <p className="m-1">Sputnik Contract ID:</p>
        <input
          type="text"
          placeholder="example.sputnik-dao.near"
          onChange={(e) => onChangeDAO(e.target.value)}
        />
      </div>

      <hr />

      <div>
        {proposals
          .slice()
          .reverse()
          .map((proposal, i) => (
            <Widget
              key={i}
              src="hack.near/widget/DAO.Proposal"
              props={{ daoId: state.daoId, id: proposals.length - i - 1 }}
            />
          ))}
      </div>
    </div>
  </>
);
