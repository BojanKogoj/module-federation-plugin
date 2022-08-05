import { NormalizedSharedConfig } from "../../config/federation-config";
import { PackageInfo } from "./package-info";

export type SharedInfo = NormalizedSharedConfig & {
    packageName: string;
    outFileName: string;
};

export interface ExposesInfo {
    key: string;
    outFileName: string;
}

export interface FederationInfo {
   name: string;
   exposes: ExposesInfo[];
   shared: SharedInfo[];
}