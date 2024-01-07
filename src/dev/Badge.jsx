if (!props.accountId || !context.accountId) {
  return "";
}

const o = Social.keys(`devs.near/graph/follow/${props.accountId}`, undefined, {
  values_only: true,
});

return o && Object.keys(o).length ? <span>⋈</span> : "";
