interface ISummaryItem {
  itemName: string;
  itemValue: number;
}

const SummaryItem: React.FC<ISummaryItem> = ({ itemName, itemValue }) => {
  return (
    <article className="flex w-36 justify-between rounded-sm bg-green-50 p-2">
      <h3 className="font-bold">{itemName}</h3>
      <span className="rounded-sm bg-green-900 px-2 text-white">
        {itemValue}
      </span>
    </article>
  );
};

export default SummaryItem;
