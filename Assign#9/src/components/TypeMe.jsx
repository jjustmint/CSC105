import React, { useState } from 'react';

function TypeMe() {
const [isFocused, setIsFocused] = useState(false);

const handleBlur = () => {
setIsFocused(false);
};

const handleFocus = () => {
setIsFocused(true);
};

return (
<div>
    <input type="text" onBlur={handleBlur} onFocus={handleFocus} />
    {!isFocused&&<p className="alert" >Please type in here!</p>}
</div>
);
}

export default TypeMe;