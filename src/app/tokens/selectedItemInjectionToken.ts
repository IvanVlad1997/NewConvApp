import { InjectionToken} from "@angular/core";
import {MeasurementUnit} from "../shared/measurementUnit.model";

export const SELECTED_ITEM_TOKEN = new InjectionToken<MeasurementUnit>('SelectedItem')
