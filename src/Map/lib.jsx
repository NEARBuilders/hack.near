const accountId = context.accountId || "mob.near";

const itemDescription =
  'The identifier item. It will be used as a unique identifier of the entity that receives the action. It\'s also used as a key of the action in the index.\nThe item should be an object with the following keys: `type`, `path` and optional `blockHeight`.\n- `type`: If the data is stored in the social DB, then the type is likely `"social"`, other types can be defined in the standards.\n- `path`: The path to the item. For a `"social"` type, it\'s absolute path within SocialDB, e.g. `alice.near/post/main`.\n- `blockHeight`: An optional paremeter to indicate the block when the data was stored. Since SocialDB data can be overwritten to save storage, the exact data should be referenced by the block height (e.g. for a given post). But if the latest data should be used, then `blockHeight` should be ommited.\n\nExamples of `item`:\n- `{type: "social", path: "mob.near/widget/N.Library"}`\n- `{type: "social", path: "mob.near/post/main", blockHeight: 81101335}`\n';

const components = [
  {
    title: "Map.index",
    category: "Map",
    path: "efiz.near/widget/Map.index",
    description:
      "This Mapjox.js template helps builders put data on their map.",
    demoProps: { markers },
    requiredProps: {
      markers: "data",
      onMapClick: "(e) => console.log(`map click`, e)",
      onMarkerClick: "(e) => console.log(`marker click``, e)",
      inspect: "(p) => <Inspect {...p} />",
      form: "(p) => <Form {...p} />",
    },
    optionalProps: {
      myMarkers: "myData",
    },
  },
  {
    title: "Map.Form",
    category: "Map",
    path: "efiz.near/widget/Map.Form",
    description: "enabling users to put data on your map",
    demoProps: { data },
    requiredProps: {
      data: "state.focusedMarker || {}",
      children: "props.form",
      handleSave,
    },
    optionalProps: {},
  },
  {
    title: "Map.Inspect",
    category: "Map",
    path: "efiz.near/widget/Map.Inspect",
    description: "for viewing details of things on your map",
    demoProps: { focusedMarker, children },
    requiredProps: {
      focusedMarker: "state.focusedMarker",
      children: "props.inspect",
    },
    optionalProps: {},
  },
  {
    title: "Map.Mapbox",
    category: "Map",
    path: "efiz.near/widget/Map.Mapbox",
    description: "core integration with Mapbox.js.",
    demoProps: {},
    requiredProps: {
      API_URL,
      accessToken: "MAP_TOKEN",
      styleUrl: "MAP_STYLE",
      center: "",
      zoom: "",
      markerAsset: "props.markerAsset",
      myMarkerAsset: "props.myMarkerAsset",
      markers: "props.markers, // array of long, lat, id",
      myMarkers: "props.myMarkers",
      edit: "state.edit",
      onMapClick:
        "(e) => { State.update({ currentLocation: e.coordinates, showInspect: false }) props.onMapClick && props.onMapClick(e); }",
      onMarkerClick:
        "(e) => { State.update({ focusedMarker: e, showInspect: true }); props.onMarkerClick && props.onMarkerClick(e); }",
    },
    optionalProps: {},
  },
  {
    title: "Fork This Demo",
    category: "Map",
    path: "efiz.near/widget/Map.demo",
    description:
      "example / forkable template wrapping the Map.index component and passing necessary props",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Events App",
    category: "Events",
    path: "itexpert120-contra.near/widget/Events",
    description: "general events app",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Event Feed",
    category: "Events",
    path: "itexpert120-contra.near/widget/EventFeed",
    description: "list of events",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Create Event",
    category: "Events",
    path: "itexpert120-contra.near/widget/CreateEvent",
    description: "reusable component for creating event things",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Event Form",
    category: "Events",
    path: "itexpert120-contra.near/widget/EventForm",
    description: "user input form allowing people to create an event",
    demoProps: {},
    requiredProps: {
      id,
      title,
      description,
      start,
      startTime,
      end,
      endTime,
      location,
      link,
      organizer,
      isAllDay,
      category,
      logo,
      background,
      hashTags,
    },
    optionalProps: {},
  },
  {
    title: "Propose Event",
    category: "Events",
    path: "itexpert120-contra.near/widget/EventProposalButton",
    description: "submit an event to a DAO for voting",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Event Card",
    category: "Events",
    path: "itexpert120-contra.near/widget/EventCard",
    description:
      "content summarizing an event for a list or grid view of events",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Edit Event",
    category: "Events",
    path: "itexpert120-contra.near/widget/EditEvent",
    description: "for editing events",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Calendar",
    category: "Events",
    path: "itexpert120-contra.near/widget/Calendar",
    description: "TBD",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "MobileCalendar",
    category: "Events",
    widgetName: "itexpert120-contra.near/widget/MobileCalendar",
    description: "TBD TODO WRAPPER",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Filter Form",
    category: "Filters",
    path: "itexpert120-contra.near/widget/FilterForm",
    description: "TBD",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "Liberty DAO",
    category: "Examples",
    widgetName: "libertydao.near/widget/boroughs.index",
    description: "TBD",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "AfforDWELL",
    category: "Examples",
    widgetName: "raycent.near/widget/Map",
    description: "TBD",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "NEARBI",
    category: "Examples",
    widgetName:
      "fcff4038fecb38b0e63ee9e865f363886415006ec9413ea70dbae598207f201c/widget/NearBi.Mapbox",
    description: "TBD",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
  {
    title: "NYC Rats",
    category: "Examples",
    widgetName: "byalbert.near/widget/RatSightingsUpdated",
    description: "TBD",
    demoProps: {},
    requiredProps: {},
    optionalProps: {},
  },
];

const renderProps = (props, optional) => {
  return Object.entries(props || {}).map(([key, desc]) => {
    return (
      <tr key={key}>
        <td>
          <span className={`code prop-key${optional ? " optional" : ""}`}>
            {key}
          </span>
        </td>
        <td className="prop-desc">
          <Markdown text={desc} />
        </td>
      </tr>
    );
  });
};

const renderComponent = (c, i) => {
  const widgetSrc = `${path}`;
  const embedCode = `<Widget\n  src="${widgetSrc}"\n  props={{${JSON.stringify(
    c.demoProps,
    undefined,
    2
  )
    .slice(1, -1)
    .split("\n")
    .map((s) => `  ${s}`)
    .join("\n")}}}\n/>\n`;
  const id = c.title.toLowerCase().replaceAll(" ", "-");
  return (
    <div className="component" key={i}>
      <div className="anchor" id={id} />
      <a href={`#${id}`}>
        <h3>{c.title}</h3>
      </a>
      <p>{c.description}</p>
      <label>Preview</label>
      <div className="preview mb-3" style={c.previewStyle}>
        <Widget src={c.path} props={c.demoProps} />
      </div>
      <label>Component</label>
      <div className="d-flex flex-row flex-wrap justify-content-between mb-3">
        <div className="path font-monospace">
          <Widget
            src="mob.near/widget/CopyButton"
            props={{
              text: widgetSrc,
              label: widgetSrc,
            }}
          />
        </div>
        <div className="source">
          <a
            href={`/mob.near/widget/WidgetSource?src=${widgetSrc}`}
            target="_blank"
            className="btn btn-outline-primary border-0"
          >
            Source
          </a>
        </div>
      </div>
      <label>Props</label>
      <table className="props table table-bordered mb-3">
        <thead>
          <tr>
            <th>Key</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {renderProps(c.requiredProps)}
          {renderProps(c.optionalProps, true)}
        </tbody>
      </table>
      <label>Example</label>
      <div className="embed-code">
        <Markdown text={`\`\`\`jsx\n${embedCode}\n\`\`\``} />
        <div className="embed-copy">
          <Widget
            src="mob.near/widget/CopyButton"
            props={{ text: embedCode, className: "btn btn-outline-light" }}
          />
        </div>
      </div>
    </div>
  );
};

const renderMenuItem = (c, i) => {
  const prev = i ? components[i - 1] : null;
  const res = [];
  if (!prev || prev.category !== c.category) {
    res.push(
      <h5 className="category" key={c.category}>
        {c.category}
      </h5>
    );
  }
  const id = c.title.toLowerCase().replaceAll(" ", "-");
  res.push(
    <div className="menu-item" key={i}>
      <a href={`#${id}`}>{c.title}</a>
    </div>
  );
  return res;
};

const Wrapper = styled.div`
@media(min-width: 992px) {
  .b-s {
    border-left: 1px solid #eee;
  }
  .b-e {
    border-right: 1px solid #eee;
  }
}
.category:not(:first-child) {
  margin-top: 1em;
}
.component {
  padding: 0.5em 12px;
  padding-bottom: 0;
  margin-bottom: 3em;
  margin: 0 -12px 3em;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  .anchor {
    position: absolute;
    top: -70px;
  }

  table {
    background: white;
  }

  label {
    font-size: 20px;
  }

  .code {
    display: inline-flex;
    line-height: normal;
    border-radius: 0.3em;
    padding: 0 4px;
    border: 1px solid #ddd;
    background: rgba(0, 0, 0, 0.03);
    font-family: var(--bs-font-monospace);
  }
  .path {

  }
  .preview {
    background-color: white;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 12px;
    pre {
      margin-bottom: 0;
    }
  }
  .props {
    .prop-key {
      font-weight: 600;
      &.optional {
        font-weight: normal;
      }
    }
    .prop-desc {
      p {
        margin-bottom: 0;
      }
    }
  }
  .embed-code {
    position: relative;

    .embed-copy {
      position: absolute;
      top: 18px;
      right: 10px;
    }
  }
}
`;

return (
  <Wrapper>
    <h3>Social Components Library</h3>
    <div className="mb-3">
      This library contains common social components used by near.social
    </div>
    <div className="row">
      <div className="col-lg-3 b-e b-s">{components.map(renderMenuItem)}</div>
      <div className="col-lg-9 b-e">{components.map(renderComponent)}</div>
    </div>
  </Wrapper>
);
