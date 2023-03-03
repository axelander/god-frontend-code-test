import { MouseEventHandler } from 'react';
import { Block, TabNavItem, View } from 'vcc-ui';

type TabFilterItem = {
  text: string;
  value: string;
  id: string;
};

interface TabFilterProps {
  items: TabFilterItem[];
  activeItemId: string;
  onItemClick: MouseEventHandler<HTMLButtonElement>;
}

export const TabFilter: React.FC<TabFilterProps> = ({
  items,
  activeItemId,
  onItemClick,
}) => {
  return (
    <View direction="row" role="list" shrink={0} justifyContent="center">
      {items.map((item) => (
        <Block key={item.id}>
          <TabNavItem
            isActive={item.id === activeItemId}
            value={item.value}
            onClick={onItemClick}
          >
            {item.text}
          </TabNavItem>
        </Block>
      ))}
    </View>
  );
};
