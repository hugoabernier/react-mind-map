import * as React from 'react';
import styles from './MindMap.module.scss';
import { IMindMapProps } from './IMindMapProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { customizeUtil, MindMapMain } from 'mind-map';

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

const options = {
  container: 'jsmind_container',
  //theme: 'normal',
  theme:'orange',
  editable: true,
  depth: 4,
  hasInteraction: true,
  enableDraggable: true,
  hierarchyRule: HIERARCHY_RULES
};

const mind = {
  "format": "nodeTree",
    "data": {
      "id": 43,
      "topic": "xx",
      "selectedType": false,
      "backgroundColor": "#7EC6E1",
      "children": [
        {
          "id": 80,
          "color": "#fff",
          "topic": "show room",
          "direction": "right",
          "selectedType": "Sales Manager",
          "backgroundColor": "#616161",
          "children": []
        },
        {
          "id": 44,
//          "color": "#fff",
          "topic": "Sales Manager",
          "direction": "right",
          "selectedType": "Sales Manager",
//          "backgroundColor": "#616161",
          "children": [
            {
              "id": 46,
  //            "color": "#fff",
              "topic": "Show Room",
              "direction": "right",
              "selectedType": "Show Room",
    //          "backgroundColor": "#989898",
              "children": [
                {
                  "id": 49,
      //            "color": "#fff",
                  "topic": "Sales Team C",
                  "direction": "right",
                  "selectedType": "Sales Team",
        //          "backgroundColor": "#C6C6C6",
                  "children": []
                },
                {
                  "id": 51,
                  "color": "#fff",
                  "topic": "AMG",
                  "direction": "right",
                  "selectedType": "Sales Team",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                },
                {
                  "id": 47,
                  "color": "#fff",
                  "topic": "Sales Team A",
                  "direction": "right",
                  "selectedType": "Sales Team",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                },
                {
                  "id": 48,
                  "color": "#fff",
                  "topic": "Sales Team B",
                  "direction": "right",
                  "selectedType": "Sales Team",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                },
                {
                  "id": 50,
                  "color": "#fff",
                  "topic": "Sales Team D",
                  "direction": "right",
                  "selectedType": "Sales Team",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": 45,
          "color": "#fff",
          "topic": "Smart",
          "direction": "right",
          "selectedType": "Sales Manager",
          "backgroundColor": "#616161",
          "children": []
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
    return (
      <div className={ styles.mindMap }>
        <div id="jsmind_container">
        </div>
      </div>
    );
  }

  private removeNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    const selectedId = selectedNode && selectedNode.id;

    if (!selectedId) {
      return;
    }
    this.mindMap.removeNode(selectedId);
  }

  // private addNode() {
  //   const selectedNode = this.mindMap.getSelectedNode();
  //   if (!selectedNode) {
  //     return;
  //   }

  //   const nodeId = customizeUtil.uuid.newid();
  //   this.mindMap.addNode(selectedNode, nodeId);
  // }

  private getMindMapData() {
    const data = this.mindMap.getData().data;
    console.log('data: ', data);
  }
}
