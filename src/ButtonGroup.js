import React from 'react';

function ButtonGroup({ groupOption, setGroupOption, orderOption, setOrderOption }) {
  const handleGroupOptionChange = (option) => {
    setGroupOption(option);
  };

  const handleOrderOptionChange = (option) => {
    setOrderOption(option);
  };

  return (
    <div className="ButtonGroup">
      <div className="dropdown">
        <label htmlFor="groupDropdown">Group By:</label>
        <select
          id="groupDropdown"
          value={groupOption}
          onChange={(e) => handleGroupOptionChange(e.target.value)}
        >
          <option value="status">By Status</option>
          <option value="user">By User</option>
          <option value="prioritygrouping">By Priority</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="orderDropdown">Order By:</label>
        <select
          id="orderDropdown"
          value={orderOption}
          onChange={(e) => handleOrderOptionChange(e.target.value)}
        >
          <option value="priority">Priority (Descending)</option>
          <option value="title">Title (Alphabetical)</option>
        </select>
      </div>
    </div>
  );
}

export default ButtonGroup;
