// The values in this enum should never be reassigned, even if some are removed
// over time (it would mess up the search results, which are the whole point of
// having this system)
export enum MessageName {
  UNNAMED = 0,
  EXCEPTION = 1,
  MISSING_PEER_DEPENDENCY = 2,
  CYCLIC_DEPENDENCIES = 3,
  DISABLED_BUILD_SCRIPTS = 4,
  BUILD_DISABLED = 5,
  SOFT_LINK_BUILD = 6,
  MUST_BUILD = 7,
  MUST_REBUILD = 8,
  BUILD_FAILED = 9,
  RESOLVER_NOT_FOUND = 10,
  FETCHER_NOT_FOUND = 11,
  LINKER_NOT_FOUND = 12,
  FETCH_NOT_CACHED = 13,
  YARN_IMPORT_FAILED = 14,
  REMOTE_INVALID = 15,
  REMOTE_NOT_FOUND = 16,
  RESOLUTION_PACK = 17,
  CACHE_CHECKSUM_MISMATCH = 18,
  UNUSED_CACHE_ENTRY = 19,
  MISSING_LOCKFILE_ENTRY = 20,
  WORKSPACE_NOT_FOUND = 21,
  TOO_MANY_MATCHING_WORKSPACES = 22,
  CONSTRAINTS_MISSING_DEPENDENCY = 23,
  CONSTRAINTS_INCOMPATIBLE_DEPENDENCY = 24,
  CONSTRAINTS_EXTRANEOUS_DEPENDENCY = 25,
  CONSTRAINTS_INVALID_DEPENDENCY = 26,
  CANT_SUGGEST_RESOLUTIONS = 27,
  FROZEN_LOCKFILE_EXCEPTION = 28,
  CROSS_DRIVE_VIRTUAL_LOCAL = 29,
  FETCH_FAILED = 30,
  DANGEROUS_NODE_MODULES = 31,
  NODE_GYP_INJECTED = 32,
  AUTHENTICATION_NOT_FOUND = 33,
  INVALID_CONFIGURATION_KEY = 34,
  NETWORK_ERROR = 35,
  LIFECYCLE_SCRIPT = 36,
  CONSTRAINTS_MISSING_FIELD = 37,
  CONSTRAINTS_INCOMPATIBLE_FIELD = 38,
  CONSTRAINTS_EXTRANEOUS_FIELD = 39,
  CONSTRAINTS_INVALID_FIELD = 40,
  AUTHENTICATION_INVALID = 41,
  PROLOG_UNKNOWN_ERROR = 42,
  PROLOG_SYNTAX_ERROR = 43,
  PROLOG_EXISTENCE_ERROR = 44,
  STACK_OVERFLOW_RESOLUTION = 45,
  AUTOMERGE_FAILED_TO_PARSE = 46,
  AUTOMERGE_IMMUTABLE = 47,
  AUTOMERGE_SUCCESS = 48,
  AUTOMERGE_REQUIRED = 49,
  DEPRECATED_CLI_SETTINGS = 50,
  PLUGIN_NAME_NOT_FOUND = 51,
  INVALID_PLUGIN_REFERENCE = 52,
  CONSTRAINTS_AMBIGUITY = 53,
  CACHE_OUTSIDE_PROJECT = 54,
  IMMUTABLE_INSTALL = 55,
  IMMUTABLE_CACHE = 56,
  INVALID_MANIFEST = 57,
  PACKAGE_PREPARATION_FAILED = 58,
  INVALID_RANGE_PEER_DEPENDENCY = 59,
  INCOMPATIBLE_PEER_DEPENDENCY = 60,
};