const ListItem = ({ task, index }) => {
	return (
		<div>
			<li>
				<label htmlFor="" className="active">
					{index + 1}{task}
				</label>
				<input type="checkbox" id="" />
			</li>
		</div>
	);
};

export default ListItem;
