import React from 'react';

interface TagProps {
  label: string;
}

/** Badge de tecnologia/skill. */
const Tag: React.FC<TagProps> = ({ label }) => <span className='tag'>{label}</span>;

export default Tag;
