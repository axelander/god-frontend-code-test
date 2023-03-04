import { Block, TabNavItem, View } from 'vcc-ui';

type TabFilterItem = {
  text: string;
  id: string;
};

interface TabFilterProps {
  items: TabFilterItem[];
  activeItemId: string;
  onItemClick: (value: string) => void;
}

export const TabFilter: React.FC<TabFilterProps> = ({
  items,
  activeItemId,
  onItemClick,
}) => {
  return (
    <View direction="row" role="tablist" justifyContent="center" wrap="wrap">
      {items.map((item) => (
        <Block key={item.id}>
          <TabNavItem
            isActive={item.id === activeItemId}
            value={item.id}
            // @ts-ignore: target.value is present here, is the onClick handler on TabNavItem typed correctly?
            onClick={(e) => onItemClick(e.target.value)}
            role="tab"
            name={`Filter by bodytype ${item.text}`}
          >
            {item.text}
          </TabNavItem>
        </Block>
      ))}
    </View>
  );
};
