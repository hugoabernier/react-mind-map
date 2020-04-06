import * as React from 'react';
import styles from './MindMap.module.scss';
import { IMindMapProps } from './IMindMapProps';

import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { IconType } from 'office-ui-fabric-react/lib/Icon';
import { IImageProps } from 'office-ui-fabric-react/lib/Image';

import { Minder } from 'react-mind';

import * as strings from 'MindMapWebPartStrings';

require('react-mind/src/mind.draggable.js');
require('react-mind/src/mind.screenshot.js');

const MINZOOM: number = 1;
const MAXZOOM: number = 999;

export default class MindMap extends React.Component<IMindMapProps, {}> {
  private mindMap: Minder;
  private _mindContainer: HTMLDivElement;
  public componentDidMount(): void {
    if (!this.mindMap) {
      this.renderMindMap();
    }
  }

  private renderMindMap() {
    var mind = {
      "meta": {
        "name": "demo",
        "author": "792300489@qq.com",
        "version": "0.2",
      },
      "format": "node_tree",
      "data": {
        "id": "root", "topic": "mind", "children": [
          {
            "id": "easy", "topic": "Easy", "direction": "left", "expanded": false, "children": [
              { "id": "easy1", "topic": "Easy to show" },
              { "id": "easy2", "topic": "Easy to edit" },
              { "id": "easy3", "topic": "Easy to store" },
              {
                "id": "easy4", "topic": "Easy to embed", "children": [
                  { "id": "easy41", "topic": "Easy to show" },
                  { "id": "easy42", "topic": "Easy to edit" },
                  { "id": "easy43", "topic": "Easy to store" },
                  {
                    "id": "open44", "topic": "BSD License", "children": [
                      { "id": "open441", "topic": "on GitHub" },
                      { "id": "open442", "topic": "BSD License" }
                    ]
                  },
                  { "id": "easy45", "topic": "Easy to embed" }
                ]
              }
            ]
          },
          {
            "id": "open", "topic": "Open Source", "direction": "right", "children": [
              { "id": "open1", "topic": "on GitHub" },
              {
                "id": "open2", "topic": "BSD License", "children": [
                  { "id": "open21", "topic": "on GitHub" },
                  {
                    "id": "open22", "topic": "BSD License", "children": [
                      { "id": "open221", "topic": "on GitHub" },
                      { "id": "open222", "topic": "BSD License" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "powerful", "topic": "Powerful", "direction": "right", "expanded": false, "children": [
              { "id": "powerful1", "topic": "Base on Javascript" },
              { "id": "powerful2", "topic": "Base on HTML5" },
              {
                "id": "powerful3", "topic": "Depends on you", "expanded": false, "children": [
                  { "id": "powerful31", "topic": "Base on Javascript" },
                  { "id": "powerful32", "topic": "Base on HTML5" },
                  { "id": "powerful33", "topic": "Depends on you" }
                ]
              }
            ]
          },
          {
            "id": "other", "topic": "test node", "direction": "left", "children": [
              { "id": "other1", "topic": "I'm from ajax" },
              { "id": "other2", "topic": "I can do everything" }
            ]
          }
        ]
      }
    };
    var options = {
      container: this._mindContainer,
      editable: true,
      theme: 'primary'
    };
    this.mindMap = Minder.show(options, mind);

    // Store the dimensions of the container
    const dims: DOMRectList | ClientRectList = this._mindContainer.parentElement.getClientRects();
    const dim: DOMRect = dims[0] as DOMRect;
    console.log("Container dimensions", dim);
    const mindSize = this.mindMap.view.size;
    console.log("mindSize", mindSize);
    this._mindContainer.style.width = `${dim.width}px`;
    this._mindContainer.style.height = `${dim.height}px`;

    const scale: number = dim.width / mindSize.w;
    console.log("Scale", scale);
    this._mindContainer.style.transform = `scale(${scale})`;
    this._mindContainer.style.marginLeft = `-${(scale * dim.width) / 2}px`;
    this._mindContainer.style.marginTop = `-${((scale * dim.height) / 2) - 40}px`;
    //this._mindContainer.style.zoom = `${scale}`;
    this.mindMap.resize();
    // Change the width
    // svg.setAttribute("width", "100%");
    // svg.removeAttribute("height");
    // svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    // svg.setAttribute("role", "image");
  }

  public render(): React.ReactElement<IMindMapProps> {
    const overflowProps: IButtonProps = { ariaLabel: 'More commands' };


    const subtopicIcon: string = require('./assets/SubTopic.svg');

    const _items: ICommandBarItemProps[] = [
      {
        key: 'addNode',
        text: strings.AddToolbarButton,
        title: strings.AddToolbarButtonTitle,
        iconOnly: true,
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        onClick: this.addSubTopic,
        iconProps: { iconName: 'Add' },
        // iconProps: {
        //   iconType: IconType.Image,
        //   imageProps: {
        //     src: subtopicIcon
        //   }
        // },
      },
      {
        key: 'removeNode',
        text: strings.RemoveToolbarButton,
        title: strings.RemoveToolbarButtonTitle,
        iconOnly: true,
        iconProps: { iconName: 'Remove' },
        onClick: this.removeNode
      },
      {
        key: 'zoomIn',
        text: strings.ZoomInToolbarButton,
        iconOnly: true,
        iconProps: { iconName: 'zoomIn' },
        onClick: this.zoomIn,
        disabled: this.mindMap && this.mindMap.view && this.mindMap.view.actualZoom >= MAXZOOM
      },
      {
        key: 'zoomOut',
        text: strings.ZoomOutToolbarButton,
        iconOnly: true,
        iconProps: { iconName: 'zoomOut' },
        onClick: this.zoomOut,
        disabled: this.mindMap && this.mindMap.view && this.mindMap.view.actualZoom <= MINZOOM
      }

    ];

    const _overflowItems: ICommandBarItemProps[] = [
      {
        key: 'shoot',
        text: strings.SnapshotToolbarButton,
        title: strings.SnapshotToolbarButtonTitle,
        iconProps: { iconName: 'Camera' },
        onClick: this.getScreenshot
      }
    ];

    const _farItems: ICommandBarItemProps[] = [
      {
        key: 'tile',
        text: 'Grid view',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Grid view',
        iconOnly: true,
        iconProps: { iconName: 'Tiles' },
        onClick: this.resize,
      },
      {
        key: 'info',
        text: 'Info',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Info',
        iconOnly: true,
        iconProps: { iconName: 'Info' },
        onClick: this.getMindMapData,
      },
    ];


    return (
      <div className={styles.mindMap}>
        <CommandBar
          items={_items}
          overflowItems={_overflowItems}
          overflowButtonProps={overflowProps}
          farItems={_farItems}
          ariaLabel={strings.CommandBarAriaLabel}
        />
        <div ref={(elm) => this._mindContainer = elm} className={styles.mindMapContainer} style={{ height: 500 }}>
        </div>
      </div>
    );
  }

  private removeNode = () => {
    const selectedNode = this.mindMap.get_selected_node();
    if (selectedNode) {
      const parentNode = selectedNode.parent;
      this.mindMap.remove_node(selectedNode);
      this.mindMap.select_node(parentNode);
    }
  }

  private addSubTopic = () => {
    const selectedNode = this.mindMap.get_selected_node();

    const newNode = this.mindMap.add_node(selectedNode, "sub23", "New node", {});
    console.log("New node", newNode);
    this.mindMap.select_node(newNode);
    this.mindMap.begin_edit(newNode);
    //this.mindMap.set_node_color('sub21', 'green', '#ccc');
  }

  private getScreenshot = () => {
    this.mindMap.screenshot.shootDownload();
  }

  private getMindMapData = () => {
    console.log("Get mind map data");
    const data = this.mindMap.get_data().data;
    console.log('data: ', data);
  }

  private zoomIn = () => {
    const { view } = this.mindMap;
    if (view.actualZoom < MAXZOOM) {
      view.zoomIn();
      console.log("Zoom", view.actualZoom);
    }
  }

  private zoomOut = () => {
    const { view } = this.mindMap;
    if (view.actualZoom > MINZOOM) {
      view.zoomOut();
      console.log("Zoom", view.actualZoom);
    }
  }

  private resize = () => {
    this._mindContainer.style.width = `300px`;
    this._mindContainer.style.height = `300px`;

    this._mindContainer.style.transform = `scale(1)`;
    //this._mindContainer.style.zoom = `1`;
    this.mindMap.resize();
  }
}
