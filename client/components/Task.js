import React from 'react';

const Task = () => {
  return (
    <div>
      $<input type="number" placeholder="Budget" className="required" required/>
      <input type="text" placeholder="Describe the task" className="required" required/>
        <select className="required" required>
          <option disabled>--Select category--</option>
          <option>Caterer</option>
          <option>Mover</option>
          <option>Cleaner</option>
          <option>Designer</option>
          <option>Photographer</option>
          <option>Greeter</option>
          <option>Demolition</option>
          <option>Painter</option>
          <option>Gardener</option>
          <option>Maintenance</option>
        </select>
    </div>
  )
}

export default Task;