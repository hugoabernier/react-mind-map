import * as React from 'react';
import styles from './MindMap.module.scss';
import { IMindMapProps } from './IMindMapProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { customizeUtil, MindMapMain, MindMapModuleOpts } from 'mind-map';

import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';


const HIERARCHY_RULES = {
  ROOT: {
    name: 'Root',
    //backgroundcolor:: '#7EC6E1',
    getChildren: () => [
      HIERARCHY_RULES.SALES_MANAGER,
      HIERARCHY_RULES.SHOW_ROOM,
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SALES_MANAGER: {
    name: 'Sales Manager',
    //color: '#fff',
    //backgroundcolor:: '#616161',
    getChildren: () => [
      HIERARCHY_RULES.SHOW_ROOM,
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SHOW_ROOM: {
    name: 'Show Room',
    //color: '#fff',
    //backgroundcolor:: '#989898',
    getChildren: () => [
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SALES_TEAM: {
    name: 'Sales Team',
    //color: '#fff',
    //backgroundcolor:: '#C6C6C6',
    getChildren: () => []
  }
};

const options: MindMapModuleOpts = {
  container: 'jsmind_container',
  //theme: 'normal',
  theme: 'warning',
  editable: true,
  depth: 10,
  hasInteraction: true,
  enableDraggable: true,
  hierarchyRule: HIERARCHY_RULES,
  // view: {
  //   hmargin: 100,
  //   vmargin: 50,
  //   lineWidth: 2,
  //   lineColor: '#555'
  // },
  // layout: {
  //   hspace: 30,
  //   vspace: 20,
  //   pspace: 13
  // },
  // defaultEventHandle: {
  //   canHandleMouseDown: true,
  //   canHandleClick: true,
  //   canHandleDblclick: true
  // },
  shortcut: {
    enable: true,
    handles: {},
    mapping: {
      addchild: 45, // Insert
      //addbrother: 13, // Enter
      editnode: 113, // F2
      delnode: 46, // Delete
      toggle: 32, // Space
      left: 37, // Left
      up: 38, // Up
      right: 39, // Right
      down: 40, // Down
    }
  },
};

// const mind = {
//   "format": "nodeTree",
//   "data": {
//     "id": 43,
//     "topic": "xx",
//     "selectedType": false, //false,
//     //"backgroundColor": "#7EC6E1",
//     "children": [
//       {
//         "id": 80,
//         //"color": "#fff",
//         "topic": "show room",
//         "direction": "right",
//         "selectedType": false, //false, //"Sales Manager",
//         //"backgroundColor": "#616161",
//         "children": []
//       },
//       {
//         "id": 44,
//         //          "color": "#fff",
//         "topic": "Sales Manager",
//         "direction": "right",
//         "selectedType": false, //"Sales Manager",
//         //          "backgroundColor": "#616161",
//         "children": [
//           {
//             "id": 46,
//             //            "color": "#fff",
//             "topic": "Show Room",
//             "direction": "right",
//             "selectedType": false, //"Show Room",
//             //          "backgroundColor": "#989898",
//             "children": [
//               {
//                 "id": 49,
//                 //            "color": "#fff",
//                 "topic": "Sales Team C",
//                 "direction": "right",
//                 "selectedType": false, //"Sales Team",
//                 //          "backgroundColor": "#C6C6C6",
//                 "children": []
//               },
//               {
//                 "id": 51,
//                 //      "color": "#fff",
//                 "topic": "AMG",
//                 "direction": "right",
//                 "selectedType": false, //"Sales Team",
//                 //    "backgroundColor": "#C6C6C6",
//                 "children": []
//               },
//               {
//                 "id": 47,
//                 //   "color": "#fff",
//                 "topic": "Sales Team A",
//                 "direction": "right",
//                 "selectedType": false, //"Sales Team",
//                 // "backgroundColor": "#C6C6C6",
//                 "children": []
//               },
//               {
//                 "id": 48,
//                 //"color": "#fff",
//                 "topic": "Sales Team B",
//                 "direction": "right",
//                 "selectedType": false, //"Sales Team",
//                 //"backgroundColor": "#C6C6C6",
//                 "children": []
//               },
//               {
//                 "id": 50,
//                 //"color": "#fff",
//                 "topic": "Sales Team D",
//                 "direction": "right",
//                 "selectedType": false, //"Sales Team",
//                 //"backgroundColor": "#C6C6C6",
//                 "children": []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "id": 45,
//         //"color": "#fff",
//         "topic": "Smart",
//         "direction": "right",
//         "selectedType": false, //"Sales Manager",
//         //"backgroundColor": "#616161",
//         "children": []
//       }
//     ]
//   }
// };

const mind = {
  "meta": {
    "name": "MindMap",
    "author": "hizzgdev@163.com",
    "version": "0.2"
  },
  "format": "nodeTree",
  "data": {
    "id": "root",
    "topic": "Mind Map",
    "expanded": true,
    // "children": []
    "children": [
      {
        "id": "easy",
        "topic": "Easy",
        "expanded": false,
        "direction": "left",
        "children": [
          {
            "id": "easy1",
            "topic": "Easy to show",
            "expanded": true
          },
          {
            "id": "easy2",
            "topic": "Easy to edit",
            "expanded": true
          },
          {
            "id": "easy3",
            "topic": "Easy to store",
            "expanded": true
          },
          {
            "id": "easy4",
            "topic": "Easy to embed",
            "expanded": true,
            "children": [
              {
                "id": "easy41",
                "topic": "Easy to show",
                "expanded": true
              },
              {
                "id": "easy42",
                "topic": "Easy to edit",
                "expanded": true
              },
              {
                "id": "easy43",
                "topic": "Easy to store",
                "expanded": true
              },
              {
                "id": "open44",
                "topic": "BSD License",
                "expanded": true,
                "children": [
                  {
                    "id": "open441",
                    "topic": "on GitHub",
                    "expanded": true
                  },
                  {
                    "id": "open442",
                    "topic": "BSD License",
                    "expanded": true
                  }
                ]
              },
              {
                "id": "easy45",
                "topic": "Easy to embed",
                "expanded": true
              }
            ]
          }
        ]
      },
      {
        "id": "open",
        "topic": "Open Source",
        "expanded": true,
        "direction": "right",
        "children": [
          {
            "id": "open1",
            "topic": "on GitHub",
            "expanded": true
          },
          {
            "id": "open2",
            "topic": "BSD License",
            "expanded": true,
            "children": [
              {
                "id": "open21",
                "topic": "on GitHub",
                "expanded": true
              },
              {
                "id": "open22",
                "topic": "BSD License",
                "expanded": true,
                "children": [
                  {
                    "id": "open221",
                    "topic": "on GitHub",
                    "expanded": true
                  },
                  {
                    "id": "open222",
                    "topic": "BSD License",
                    "expanded": true
                  }
                ]
              }
            ]
          },
          {
            "id": "1485b5b3378dcb99",
            "expanded": true,
            "background-image": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDE4OC4xNDkgMTg4LjE0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTg4LjE0OSAxODguMTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGRlZnM+DQoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9Ijk0LjA3NCIgY3k9Ijk0LjA3NSIgcj0iOTQuMDc0Ii8+DQoJCTwvZGVmcz4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTtmaWxsOiNFNkU3RTI7Ii8+DQoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPg0KCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJPC9jbGlwUGF0aD4NCgkJPHBhdGggc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiNFQ0MxOUM7IiBkPSJNMTI2LjcwOCwxNTMuOTQ2aC0wLjAyYy0yLjA0MS0xLjU0NS00LjE3OC0yLjkxOS02LjQyOS00LjE1OQ0KCQkJYy0wLjA1OC0wLjAzOC0wLjExNS0wLjA3Ni0wLjE5MS0wLjA5NWMtMTAuNjQ2LTUuODc2LTE3Ljg1Ny0xNy4yMDktMTcuODU3LTMwLjIzOWwtMTYuMTIxLTAuMDc3DQoJCQljMCwxMy4wNjktNy4yNjksMjQuNDU5LTE4LjAxLDMwLjMxNWMwLDAtMC4wMTksMC0wLjAzOCwwLjAxOWMtMi4yNzEsMS4yNC00LjQ0NSwyLjYzMy02LjUwNiw0LjE1OQ0KCQkJYy0xMy4zNTUsOS45NC0yMS45OTcsMjUuODMyLTIxLjk5Nyw0My43NjZoMTA5LjA3QzE0OC42MSwxNzkuNzQsMTQwLjAwNiwxNjMuODg1LDEyNi43MDgsMTUzLjk0NnoiLz4NCgkJPHBhdGggc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiMxNjhFRjc7IiBkPSJNMTQ4LjYwOSwxOTcuNjI5SDM5LjUzOGMwLTE3LjkzNCw4LjY0Mi0zMy44MjYsMjEuOTk3LTQzLjc2Ng0KCQkJYzIuMDYxLTEuNTI2LDQuMjM1LTIuOTE5LDYuNTA1LTQuMTU5YzAuMDItMC4wMTksMC4wMzktMC4wMTksMC4wMzktMC4wMTljMS43NTUtMC45NzMsMy40MzQtMi4wOCw0Ljk3OS0zLjMzOQ0KCQkJYzUuMzQyLDUuNDc2LDEyLjgwMiw4Ljg3MiwyMS4wNjMsOC44NzJjOC4yNDIsMCwxNS42ODMtMy4zOTYsMjEuMDI0LTguODUzYzEuNTI2LDEuMjU5LDMuMTg3LDIuMzY2LDQuOTIyLDMuMzINCgkJCWMwLjA3NiwwLjAxOSwwLjEzNCwwLjA1NywwLjE5MSwwLjA5NWMyLjI1MSwxLjI0LDQuMzg4LDIuNjE0LDYuNDI5LDQuMTU5aDAuMDJDMTQwLjAwNSwxNjMuODc5LDE0OC42MDksMTc5LjczMywxNDguNjA5LDE5Ny42Mjl6DQoJCQkiLz4NCgkJPHBhdGggc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiNFQ0MxOUM7IiBkPSJNNTIuMjE3LDM4LjA5MXY0Mi44MzZjMCwyOC45NzYsMjUuNDM3LDUyLjQ2NSw0MS44NTgsNTIuNDY1DQoJCQljMTYuNDE5LDAsNDEuODU4LTIzLjQ4OSw0MS44NTgtNTIuNDY1VjM4LjA5MUg1Mi4yMTd6Ii8+DQoJCTxwYXRoIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZmlsbDojNDk0ODQ2OyIgZD0iTTEyOS4xMTQsMzAuMjA3Yy05LjEyMy0xMS40MjMtMjIuOTcyLTE4LjcyNi0zOC40NjMtMTguNzI2DQoJCQljLTI3LjUyMSwwLTQ5LjgxLDIyLjk3Mi00OS44MSw1MS4zMDFjMCwxNS4wMzYsNi4yNjcsMjguNTU2LDE2LjI3NCwzNy45MzJjLTIuNTc4LTYuNDctNC4wMTgtMTMuNzIyLTQuMDE4LTIxLjM4DQoJCQljMC0xMi4zMDcsMy43NC0yMy41NzgsOS45NTctMzIuMjQ2YzYuNTk2LDIuOTMyLDE3LjI4NiwzLjk5MywyOS4wMTEsMi4zNzZjMTEuNjI1LTEuNTkyLDIxLjUzMS01LjQzMywyNy4xMTYtMTAuMDA3DQoJCQljMTAuMTg1LDguOTk2LDE2LjgwNiwyMy41MDIsMTYuODA2LDM5Ljg3N2MwLDguMzktMS43MTksMTYuMjc1LTQuODAyLDIzLjE5OWM5LjgzLTQuMDY5LDE3LjA1OC0xOC41NzQsMTcuMDU4LTM1LjgzNQ0KCQkJQzE0OC4yNDMsNDguMjI1LDEzOS45NTQsMzIuOTg3LDEyOS4xMTQsMzAuMjA3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K",
            "width": "100",
            "height": "100"
          }
        ]
      },
      {
        "id": "powerful",
        "topic": "Powerful",
        "expanded": false,
        "direction": "right",
        "children": [
          {
            "id": "powerful1",
            "topic": "Base on Javascript",
            "expanded": true
          },
          {
            "id": "powerful2",
            "topic": "Base on HTML5",
            "expanded": true
          },
          {
            "id": "powerful3",
            "topic": "Depends on you",
            "expanded": false,
            "children": [
              {
                "id": "powerful31",
                "topic": "Base on Javascript",
                "expanded": true
              },
              {
                "id": "powerful32",
                "topic": "Base on HTML5",
                "expanded": true
              },
              {
                "id": "powerful33",
                "topic": "Depends on you",
                "expanded": true
              }
            ]
          }
        ]
      },
      {
        "id": "other",
        "topic": "test node",
        "expanded": true,
        "direction": "left",
        "children": [
          {
            "id": "other1",
            "topic": "I'm from ajax",
            "expanded": true
          },
          {
            "id": "other2",
            "topic": "I can do everything",
            "expanded": true
          }
        ]
      }
    ]
  }
};

export default class MindMap extends React.Component<IMindMapProps, {}> {
  private mindMap: MindMapMain;



  public componentDidMount(): void {
    if (!this.mindMap) {
      this.mindMap = MindMapMain.show(options, mind);
    }
  }

  public render(): React.ReactElement<IMindMapProps> {
    const overflowProps: IButtonProps = { ariaLabel: 'More commands' };


const _items: ICommandBarItemProps[] = [
  {
    key: 'newItem',
    text: 'New',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    onClick: this.addNode,
    iconProps: { iconName: 'Add' },
  },
  {
    key: 'delete',
    text: 'Delete',
    iconProps: { iconName: 'Delete' },
    onClick: this.removeNode
  }
];

const _overflowItems: ICommandBarItemProps[] = [
  { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
  { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
  { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: 'tile',
    text: 'Grid view',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Grid view',
    iconOnly: true,
    iconProps: { iconName: 'Tiles' },
    onClick: () => console.log('Tiles'),
  },
  {
    key: 'info',
    text: 'Info',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Info',
    iconOnly: true,
    iconProps: { iconName: 'Info' },
    onClick: () => console.log('Info'),
  },
];


    return (
      <div className={styles.mindMap}>
        <CommandBar
        items={_items}
        overflowItems={_overflowItems}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
        <div id="jsmind_container" className={styles.mindMapContainer}>
        </div>
      </div>
    );
  }

  private removeNode = () => {
    const selectedNode = this.mindMap.getSelectedNode();
    const selectedId = selectedNode && selectedNode.id;

    if (!selectedId) {
      return;
    }
    this.mindMap.removeNode(selectedId);
  }

  private addNode = () => {
    const selectedNode = this.mindMap.getSelectedNode();
    if (!selectedNode) {
      return;
    }

    const nodeId = customizeUtil.uuid.newid();
    this.mindMap.addNode(selectedNode, nodeId, "New topic", {});
  }

  private getMindMapData() {
    const data = this.mindMap.getData().data;
    console.log('data: ', data);
  }
}
