import React from "react";

import ChartSettingsWidget from "../ChartSettingsWidget";

import _ from "underscore";

import { updateSettings } from "metabase/visualizations/lib/settings";

import type {
  Settings,
  ExtraProps,
  WidgetDef,
} from "metabase/visualizations/lib/settings";
import type {
  NestedObject,
  NestedObjectKey,
  SettingsWidgetsForObjectGetter,
  NestedObjectKeyGetter,
} from "metabase/visualizations/lib/settings/nested";
import type { Series } from "metabase-types/types/Visualization";

export type NestedSettingComponentProps = {
  objects: NestedObject[],
  object: ?NestedObject,
  objectSettingsWidgets: ?(WidgetDef[]),
  onChangeEditingObject: (editingObject: ?NestedObject) => void,
  onChangeObjectSettings: (object: NestedObject, newSettings: Settings) => void,
  getObjectKey: NestedObjectKeyGetter,
  settings: Settings,
  allComputedSettings: Settings,
};
type NestedSettingComponent = React.ComponentClass;

type SettingsByObjectKey = { [key: NestedObjectKey]: Settings };

type Props = {
  value: SettingsByObjectKey,
  onChange: (newSettings: SettingsByObjectKey) => void,
  onEndShowWidget?: () => void,
  series: Series,
  extra: ExtraProps,
  objects: NestedObject[],
  initialKey?: NestedObjectKey,
};

type State = {
  editingObjectKey: ?NestedObjectKey,
};

type ChartSettingsNestedSettingHOCProps = {
  getObjectKey: NestedObjectKeyGetter,
  getSettingsWidgetsForObject: SettingsWidgetsForObjectGetter,
};

const chartSettingNestedSettings = ({
  getObjectKey,
  getSettingsWidgetsForObject,
}: ChartSettingsNestedSettingHOCProps) => (
  ComposedComponent: NestedSettingComponent,
) =>
  class extends React.Component {
    props: Props;
    state: State;

    constructor(props: Props) {
      super(props);
    }

    handleChangeEditingObject = (editingObject: ?NestedObject) => {
      // special prop to notify ChartSettings it should unswap replaced widget
      if (!editingObject && this.props.onEndShowWidget) {
        this.props.onEndShowWidget();
      }
    };

    handleChangeSettingsForEditingObject = (newSettings: Settings) => {
      if (this.props.initialKey) {
        this.handleChangeSettingsForObjectKey(
          this.props.initialKey,
          newSettings,
        );
      }
    };

    handleChangeSettingsForObject = (
      object: NestedObject,
      newSettings: Settings,
    ) => {
      const objectKey = getObjectKey(object);
      if (objectKey != null) {
        this.handleChangeSettingsForObjectKey(objectKey, newSettings);
      }
    };

    handleChangeSettingsForObjectKey = (
      objectKey: NestedObjectKey,
      changedSettings: Settings,
    ) => {
      const { onChange } = this.props;
      const objectsSettings = this.props.value || {};
      const objectSettings = objectsSettings[objectKey] || {};
      const newSettings = updateSettings(objectSettings, changedSettings);
      onChange({
        ...objectsSettings,
        [objectKey]: newSettings,
      });
    };

    render() {
      const { series, objects, extra } = this.props;
      const editingObjectKey = this.props.initialKey;

      if (editingObjectKey) {
        const editingObject = _.find(
          objects,
          o => getObjectKey(o) === editingObjectKey,
        );
        if (editingObject) {
          const objectsSettings = this.props.value || {};
          const objectSettings = objectsSettings[editingObjectKey] || {};
          const objectSettingsWidgets = getSettingsWidgetsForObject(
            series,
            editingObject,
            objectSettings,
            this.handleChangeSettingsForEditingObject,
            extra,
          );
          return (
            <ComposedComponent
              {...this.props}
              getObjectKey={getObjectKey}
              onChangeEditingObject={this.handleChangeEditingObject}
              onChangeObjectSettings={this.handleChangeSettingsForObject}
              object={editingObject}
              objectSettingsWidgets={objectSettingsWidgets.map(widget => (
                <ChartSettingsWidget key={widget.id} {...widget} />
              ))}
            />
          );
        }
      }
      return (
        <ComposedComponent
          {...this.props}
          getObjectKey={getObjectKey}
          onChangeEditingObject={this.handleChangeEditingObject}
          onChangeObjectSettings={this.handleChangeSettingsForObject}
        />
      );
    }
  };

export default chartSettingNestedSettings;
