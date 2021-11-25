var classes = [
    {
        "name": "BatchQueue",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "claimItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAllItems",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "SystemQueue"
        ],
        "parents": [
            "SystemQueue"
        ],
        "lcom": 1,
        "length": 31,
        "vocabulary": 13,
        "volume": 114.71,
        "difficulty": 3.3,
        "effort": 378.55,
        "level": 0.3,
        "bugs": 0.04,
        "time": 21,
        "intelligentContent": 34.76,
        "number_operators": 9,
        "number_operands": 22,
        "number_operators_unique": 3,
        "number_operands_unique": 10,
        "cloc": 21,
        "loc": 43,
        "lloc": 22,
        "mi": 100.05,
        "mIwoC": 55.89,
        "commentWeight": 44.16,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.17,
        "relativeSystemComplexity": 5.17,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 2.33,
        "totalSystemComplexity": 10.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "BatchMemoryQueue",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "claimItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAllItems",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "MemoryQueue"
        ],
        "parents": [
            "MemoryQueue"
        ],
        "lcom": 1,
        "length": 17,
        "vocabulary": 8,
        "volume": 51,
        "difficulty": 3.3,
        "effort": 168.3,
        "level": 0.3,
        "bugs": 0.02,
        "time": 9,
        "intelligentContent": 15.45,
        "number_operators": 6,
        "number_operands": 11,
        "number_operators_unique": 3,
        "number_operands_unique": 5,
        "cloc": 8,
        "loc": 28,
        "lloc": 20,
        "mi": 96.09,
        "mIwoC": 59.26,
        "commentWeight": 36.83,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3.5,
        "relativeSystemComplexity": 3.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 7,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseConnection",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "defaultOptions",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConnectionOptions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPrefix",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prefixTables",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tablePrefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepareQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTarget",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTarget",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getKey",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLogger",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLogger",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeSequenceName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "query",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expandArguments",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDriverClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "merge",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "truncate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "schema",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escapeTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escapeField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escapeAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escapeLike",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "inTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transactionDepth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rollback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pushTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "popTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryRange",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "generateTemporaryTableName",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryTemporary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "supportsTransactions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "supportsTransactionalDDL",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "databaseType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mapConditionOperator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 45,
        "nbMethods": 38,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 34,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 1,
        "wmc": 82,
        "ccn": 38,
        "ccnMethodMax": 9,
        "externals": [
            "PDO",
            "DatabaseLog",
            "PDOException",
            "Database",
            "class",
            "class",
            "class",
            "class",
            "class",
            "class",
            "class",
            "class",
            "DatabaseTransactionNoActiveException",
            "DatabaseTransactionNameNonUniqueException",
            "DatabaseTransactionNoActiveException",
            "DatabaseTransactionCommitFailedException",
            "DatabaseTransactionExplicitCommitNotAllowedException"
        ],
        "parents": [
            "PDO"
        ],
        "lcom": 12,
        "length": 463,
        "vocabulary": 84,
        "volume": 2959.64,
        "difficulty": 25.24,
        "effort": 74700.58,
        "level": 0.04,
        "bugs": 0.99,
        "time": 4150,
        "intelligentContent": 117.26,
        "number_operators": 128,
        "number_operands": 335,
        "number_operators_unique": 11,
        "number_operands_unique": 73,
        "cloc": 833,
        "loc": 1148,
        "lloc": 315,
        "mi": 64.52,
        "mIwoC": 16.09,
        "commentWeight": 48.43,
        "kanDefect": 3.27,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 2.06,
        "relativeSystemComplexity": 363.06,
        "totalStructuralComplexity": 16245,
        "totalDataComplexity": 92.6,
        "totalSystemComplexity": 16337.6,
        "package": "\\",
        "pageRank": 0.06,
        "afferentCoupling": 16,
        "efferentCoupling": 9,
        "instability": 0.36,
        "violations": {}
    },
    {
        "name": "Database",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "startLog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isActiveConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setActiveConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseConnectionInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConnectionInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConnectionInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "renameConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "openConnection",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "closeConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ignoreTarget",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadDriverFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 14,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 13,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 53,
        "ccn": 40,
        "ccnMethodMax": 10,
        "externals": [
            "DatabaseLog",
            "DatabaseConnectionNotDefinedException",
            "DatabaseDriverNotSpecifiedException",
            "driver_class"
        ],
        "parents": [],
        "lcom": 14,
        "length": 275,
        "vocabulary": 45,
        "volume": 1510.26,
        "difficulty": 18.7,
        "effort": 28237.88,
        "level": 0.05,
        "bugs": 0.5,
        "time": 1569,
        "intelligentContent": 80.77,
        "number_operators": 72,
        "number_operands": 203,
        "number_operators_unique": 7,
        "number_operands_unique": 38,
        "cloc": 235,
        "loc": 417,
        "lloc": 182,
        "mi": 68.96,
        "mIwoC": 23.06,
        "commentWeight": 45.9,
        "kanDefect": 3.58,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.7,
        "relativeSystemComplexity": 50.7,
        "totalStructuralComplexity": 686,
        "totalDataComplexity": 23.75,
        "totalSystemComplexity": 709.75,
        "package": "\\",
        "pageRank": 0.03,
        "afferentCoupling": 5,
        "efferentCoupling": 4,
        "instability": 0.44,
        "violations": {}
    },
    {
        "name": "DatabaseTransactionNoActiveException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "DatabaseTransactionNameNonUniqueException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "DatabaseTransactionCommitFailedException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "DatabaseTransactionExplicitCommitNotAllowedException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 6,
        "loc": 10,
        "lloc": 4,
        "mi": 217.6,
        "mIwoC": 171,
        "commentWeight": 46.6,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "InvalidMergeQueryException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 6,
        "loc": 10,
        "lloc": 4,
        "mi": 217.6,
        "mIwoC": 171,
        "commentWeight": 46.6,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "FieldsOverlapException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 6,
        "loc": 10,
        "lloc": 4,
        "mi": 217.6,
        "mIwoC": 171,
        "commentWeight": 46.6,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "NoFieldsException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "DatabaseConnectionNotDefinedException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "DatabaseDriverNotSpecifiedException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "DatabaseTransaction",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "name",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rollback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "DatabaseConnection"
        ],
        "parents": [],
        "lcom": 1,
        "length": 34,
        "vocabulary": 11,
        "volume": 117.62,
        "difficulty": 10,
        "effort": 1176.21,
        "level": 0.1,
        "bugs": 0.04,
        "time": 65,
        "intelligentContent": 11.76,
        "number_operators": 10,
        "number_operands": 24,
        "number_operators_unique": 5,
        "number_operands_unique": 6,
        "cloc": 53,
        "loc": 87,
        "lloc": 34,
        "mi": 98.19,
        "mIwoC": 51.42,
        "commentWeight": 46.77,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 25.25,
        "totalStructuralComplexity": 100,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 101,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseStatementBase",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueryString",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchCol",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAllAssoc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAllKeyed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAssoc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 7,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [
            "PDOStatement",
            "DatabaseStatementInterface"
        ],
        "parents": [
            "PDOStatement"
        ],
        "lcom": 4,
        "length": 99,
        "vocabulary": 21,
        "volume": 434.84,
        "difficulty": 8.82,
        "effort": 3836.82,
        "level": 0.11,
        "bugs": 0.14,
        "time": 213,
        "intelligentContent": 49.28,
        "number_operators": 24,
        "number_operands": 75,
        "number_operators_unique": 4,
        "number_operands_unique": 17,
        "cloc": 23,
        "loc": 94,
        "lloc": 71,
        "mi": 74.47,
        "mIwoC": 39.8,
        "commentWeight": 34.67,
        "kanDefect": 1.03,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.02,
        "relativeSystemComplexity": 50.02,
        "totalStructuralComplexity": 392,
        "totalDataComplexity": 8.13,
        "totalSystemComplexity": 400.13,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseStatementEmpty",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueryString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rowCount",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFetchMode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAssoc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchCol",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAllKeyed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAllAssoc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "current",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "key",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rewind",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 17,
        "nbMethods": 17,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 17,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Iterator",
            "DatabaseStatementInterface"
        ],
        "parents": [],
        "lcom": 17,
        "length": 38,
        "vocabulary": 18,
        "volume": 158.46,
        "difficulty": 0.68,
        "effort": 107.19,
        "level": 1.48,
        "bugs": 0.05,
        "time": 6,
        "intelligentContent": 234.24,
        "number_operators": 15,
        "number_operands": 23,
        "number_operators_unique": 1,
        "number_operands_unique": 17,
        "cloc": 14,
        "loc": 84,
        "lloc": 70,
        "mi": 73.77,
        "mIwoC": 44.21,
        "commentWeight": 29.56,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 16,
        "relativeSystemComplexity": 16,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 272,
        "totalSystemComplexity": 272,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "DatabaseLog",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "start",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "end",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findCaller",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 7,
        "ccnMethodMax": 5,
        "externals": [
            "DatabaseStatementInterface"
        ],
        "parents": [],
        "lcom": 1,
        "length": 106,
        "vocabulary": 30,
        "volume": 520.13,
        "difficulty": 15.45,
        "effort": 8038.38,
        "level": 0.06,
        "bugs": 0.17,
        "time": 447,
        "intelligentContent": 33.66,
        "number_operators": 21,
        "number_operands": 85,
        "number_operators_unique": 8,
        "number_operands_unique": 22,
        "cloc": 100,
        "loc": 144,
        "lloc": 44,
        "mi": 92.25,
        "mIwoC": 44.19,
        "commentWeight": 48.06,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.63,
        "relativeSystemComplexity": 16.63,
        "totalStructuralComplexity": 112,
        "totalDataComplexity": 4.4,
        "totalSystemComplexity": 116.4,
        "package": "\\",
        "pageRank": 0.02,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "DatabaseConnection_mysql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryRange",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryTemporary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "databaseType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mapConditionOperator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextIdDelete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 8,
        "ccnMethodMax": 5,
        "externals": [
            "DatabaseConnection"
        ],
        "parents": [
            "DatabaseConnection"
        ],
        "lcom": 4,
        "length": 142,
        "vocabulary": 55,
        "volume": 820.95,
        "difficulty": 10.27,
        "effort": 8432.62,
        "level": 0.1,
        "bugs": 0.27,
        "time": 468,
        "intelligentContent": 79.92,
        "number_operators": 37,
        "number_operands": 105,
        "number_operators_unique": 9,
        "number_operands_unique": 46,
        "cloc": 49,
        "loc": 120,
        "lloc": 71,
        "mi": 79.93,
        "mIwoC": 38.13,
        "commentWeight": 41.8,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.23,
        "relativeSystemComplexity": 26.23,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 9.83,
        "totalSystemComplexity": 209.83,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseTasks_mysql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "minimumVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "DatabaseTasks"
        ],
        "parents": [
            "DatabaseTasks"
        ],
        "lcom": 2,
        "length": 5,
        "vocabulary": 4,
        "volume": 10,
        "difficulty": 0.5,
        "effort": 5,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 20,
        "number_operators": 2,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 19,
        "loc": 32,
        "lloc": 13,
        "mi": 115.05,
        "mIwoC": 68.56,
        "commentWeight": 46.49,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "InsertQuery_mysql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 10,
        "ccnMethodMax": 6,
        "externals": [
            "InsertQuery"
        ],
        "parents": [
            "InsertQuery"
        ],
        "lcom": 1,
        "length": 143,
        "vocabulary": 35,
        "volume": 733.49,
        "difficulty": 13.63,
        "effort": 9997.16,
        "level": 0.07,
        "bugs": 0.24,
        "time": 555,
        "intelligentContent": 53.82,
        "number_operators": 51,
        "number_operands": 92,
        "number_operators_unique": 8,
        "number_operands_unique": 27,
        "cloc": 20,
        "loc": 71,
        "lloc": 52,
        "mi": 77.79,
        "mIwoC": 41.16,
        "commentWeight": 36.63,
        "kanDefect": 1.12,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 10,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 20,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "TruncateQuery_mysql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "TruncateQuery"
        ],
        "parents": [
            "TruncateQuery"
        ],
        "lcom": 1,
        "length": 22,
        "vocabulary": 12,
        "volume": 78.87,
        "difficulty": 3.25,
        "effort": 256.32,
        "level": 0.31,
        "bugs": 0.03,
        "time": 14,
        "intelligentContent": 24.27,
        "number_operators": 9,
        "number_operands": 13,
        "number_operators_unique": 4,
        "number_operands_unique": 8,
        "cloc": 5,
        "loc": 17,
        "lloc": 13,
        "mi": 99.25,
        "mIwoC": 62.01,
        "commentWeight": 37.24,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 9.5,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 9.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseSchema_mysql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getPrefixInfo",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildTableNameCondition",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createTableSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFieldSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "processField",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFieldTypeMap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createKeysSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createKeySql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createKeysSqlHelper",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "renameTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldSetDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldSetNoDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "indexExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUniqueKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropUniqueKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "changeField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepareComment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getComment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tableExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 27,
        "nbMethods": 27,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 19,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 92,
        "ccn": 66,
        "ccnMethodMax": 15,
        "externals": [
            "DatabaseSchema",
            "Database",
            "DatabaseCondition",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException"
        ],
        "parents": [
            "DatabaseSchema"
        ],
        "lcom": 1,
        "length": 991,
        "vocabulary": 194,
        "volume": 7531.51,
        "difficulty": 21.82,
        "effort": 164335.16,
        "level": 0.05,
        "bugs": 2.51,
        "time": 9130,
        "intelligentContent": 345.17,
        "number_operators": 265,
        "number_operands": 726,
        "number_operators_unique": 11,
        "number_operands_unique": 183,
        "cloc": 98,
        "loc": 435,
        "lloc": 337,
        "mi": 42.38,
        "mIwoC": 8.84,
        "commentWeight": 33.54,
        "kanDefect": 4.73,
        "relativeStructuralComplexity": 784,
        "relativeDataComplexity": 1.03,
        "relativeSystemComplexity": 785.03,
        "totalStructuralComplexity": 21168,
        "totalDataComplexity": 27.93,
        "totalSystemComplexity": 21195.93,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseConnection_pgsql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "query",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryRange",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryTemporary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "databaseType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mapConditionOperator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 25,
        "ccn": 18,
        "ccnMethodMax": 11,
        "externals": [
            "DatabaseConnection",
            "PDOException"
        ],
        "parents": [
            "DatabaseConnection"
        ],
        "lcom": 5,
        "length": 255,
        "vocabulary": 66,
        "volume": 1541.32,
        "difficulty": 17.8,
        "effort": 27435.5,
        "level": 0.06,
        "bugs": 0.51,
        "time": 1524,
        "intelligentContent": 86.59,
        "number_operators": 77,
        "number_operands": 178,
        "number_operators_unique": 11,
        "number_operands_unique": 55,
        "cloc": 41,
        "loc": 153,
        "lloc": 112,
        "mi": 66.49,
        "mIwoC": 30.56,
        "commentWeight": 35.94,
        "kanDefect": 1.23,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0.98,
        "relativeSystemComplexity": 196.98,
        "totalStructuralComplexity": 1568,
        "totalDataComplexity": 7.87,
        "totalSystemComplexity": 1575.87,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseTasks_pgsql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "minimumVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkEncoding",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkPHPVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkBinaryOutput",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkBinaryOutputSuccess",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initializeDatabase",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 19,
        "ccn": 12,
        "ccnMethodMax": 5,
        "externals": [
            "DatabaseTasks",
            "Database"
        ],
        "parents": [
            "DatabaseTasks"
        ],
        "lcom": 3,
        "length": 128,
        "vocabulary": 69,
        "volume": 781.89,
        "difficulty": 8.05,
        "effort": 6294.89,
        "level": 0.12,
        "bugs": 0.26,
        "time": 350,
        "intelligentContent": 97.12,
        "number_operators": 33,
        "number_operands": 95,
        "number_operators_unique": 10,
        "number_operands_unique": 59,
        "cloc": 56,
        "loc": 159,
        "lloc": 103,
        "mi": 73.98,
        "mIwoC": 34.22,
        "commentWeight": 39.76,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.33,
        "relativeSystemComplexity": 64.33,
        "totalStructuralComplexity": 512,
        "totalDataComplexity": 2.67,
        "totalSystemComplexity": 514.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "InsertQuery_pgsql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 20,
        "ccn": 19,
        "ccnMethodMax": 14,
        "externals": [
            "InsertQuery"
        ],
        "parents": [
            "InsertQuery"
        ],
        "lcom": 1,
        "length": 244,
        "vocabulary": 60,
        "volume": 1441.28,
        "difficulty": 16.8,
        "effort": 24213.53,
        "level": 0.06,
        "bugs": 0.48,
        "time": 1345,
        "intelligentContent": 85.79,
        "number_operators": 76,
        "number_operands": 168,
        "number_operators_unique": 10,
        "number_operands_unique": 50,
        "cloc": 37,
        "loc": 123,
        "lloc": 87,
        "mi": 70.57,
        "mIwoC": 33.02,
        "commentWeight": 37.55,
        "kanDefect": 2,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 49.5,
        "totalStructuralComplexity": 98,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 99,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "UpdateQuery_pgsql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 8,
        "ccnMethodMax": 8,
        "externals": [
            "UpdateQuery"
        ],
        "parents": [
            "UpdateQuery"
        ],
        "lcom": 1,
        "length": 95,
        "vocabulary": 25,
        "volume": 441.17,
        "difficulty": 7.43,
        "effort": 3277.24,
        "level": 0.13,
        "bugs": 0.15,
        "time": 182,
        "intelligentContent": 59.39,
        "number_operators": 17,
        "number_operands": 78,
        "number_operators_unique": 4,
        "number_operands_unique": 21,
        "cloc": 8,
        "loc": 53,
        "lloc": 45,
        "mi": 72.65,
        "mIwoC": 44.34,
        "commentWeight": 28.31,
        "kanDefect": 1.28,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.11,
        "relativeSystemComplexity": 64.11,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 0.11,
        "totalSystemComplexity": 64.11,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseSchema_pgsql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "queryTableInformation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryFieldInformation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createTableSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFieldSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "processField",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFieldTypeMap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_createKeySql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "renameTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldSetDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldSetNoDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "indexExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "constraintExists",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUniqueKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropUniqueKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "changeField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_createIndexSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_createKeys",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getComment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 25,
        "nbMethods": 25,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 18,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 114,
        "ccn": 90,
        "ccnMethodMax": 17,
        "externals": [
            "DatabaseSchema",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException"
        ],
        "parents": [
            "DatabaseSchema"
        ],
        "lcom": 1,
        "length": 1248,
        "vocabulary": 224,
        "volume": 9743.58,
        "difficulty": 21.33,
        "effort": 207847.84,
        "level": 0.05,
        "bugs": 3.25,
        "time": 11547,
        "intelligentContent": 456.76,
        "number_operators": 335,
        "number_operands": 913,
        "number_operators_unique": 10,
        "number_operands_unique": 214,
        "cloc": 124,
        "loc": 506,
        "lloc": 382,
        "mi": 38.34,
        "mIwoC": 3.64,
        "commentWeight": 34.7,
        "kanDefect": 6.87,
        "relativeStructuralComplexity": 576,
        "relativeDataComplexity": 0.96,
        "relativeSystemComplexity": 576.96,
        "totalStructuralComplexity": 14400,
        "totalDataComplexity": 24.08,
        "totalSystemComplexity": 14424.08,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "SelectQuery_pgsql",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "orderRandom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 12,
        "ccnMethodMax": 12,
        "externals": [
            "SelectQuery"
        ],
        "parents": [
            "SelectQuery"
        ],
        "lcom": 1,
        "length": 75,
        "vocabulary": 21,
        "volume": 329.42,
        "difficulty": 12.75,
        "effort": 4200.15,
        "level": 0.08,
        "bugs": 0.11,
        "time": 233,
        "intelligentContent": 25.84,
        "number_operators": 24,
        "number_operands": 51,
        "number_operators_unique": 7,
        "number_operands_unique": 14,
        "cloc": 53,
        "loc": 96,
        "lloc": 43,
        "mi": 90.78,
        "mIwoC": 45.12,
        "commentWeight": 45.66,
        "kanDefect": 1.33,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 26.33,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 2.67,
        "totalSystemComplexity": 52.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseStatementPrefetch",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "throwPDOException",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStatement",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueryString",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFetchMode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "current",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "key",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rewind",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rowCount",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAssoc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchCol",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAllKeyed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAllAssoc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 17,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 15,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 65,
        "ccn": 46,
        "ccnMethodMax": 16,
        "externals": [
            "Iterator",
            "DatabaseStatementInterface",
            "DatabaseConnection",
            "PDOException",
            "ReflectionClass",
            "class_name"
        ],
        "parents": [],
        "lcom": 2,
        "length": 449,
        "vocabulary": 56,
        "volume": 2607.5,
        "difficulty": 38.38,
        "effort": 100070.15,
        "level": 0.03,
        "bugs": 0.87,
        "time": 5559,
        "intelligentContent": 67.94,
        "number_operators": 135,
        "number_operands": 314,
        "number_operators_unique": 11,
        "number_operands_unique": 45,
        "cloc": 164,
        "loc": 441,
        "lloc": 277,
        "mi": 57.13,
        "mIwoC": 16.61,
        "commentWeight": 40.52,
        "kanDefect": 3.51,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 2.09,
        "relativeSystemComplexity": 171.09,
        "totalStructuralComplexity": 3380,
        "totalDataComplexity": 41.71,
        "totalSystemComplexity": 3421.71,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 6,
        "instability": 0.86,
        "violations": {}
    },
    {
        "name": "Query",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__sleep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__wakeup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextPlaceholder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "comment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getComments",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 7,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "QueryPlaceholderInterface",
            "DatabaseConnection",
            "Database"
        ],
        "parents": [],
        "lcom": 4,
        "length": 36,
        "vocabulary": 8,
        "volume": 108,
        "difficulty": 4.17,
        "effort": 450,
        "level": 0.24,
        "bugs": 0.04,
        "time": 25,
        "intelligentContent": 25.92,
        "number_operators": 11,
        "number_operands": 25,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 95,
        "loc": 137,
        "lloc": 42,
        "mi": 98.26,
        "mIwoC": 50.22,
        "commentWeight": 48.04,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.09,
        "relativeSystemComplexity": 10.09,
        "totalStructuralComplexity": 72,
        "totalDataComplexity": 8.75,
        "totalSystemComplexity": 80.75,
        "package": "\\",
        "pageRank": 0.02,
        "afferentCoupling": 6,
        "efferentCoupling": 3,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "InsertQuery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "values",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useDefaults",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "from",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "preExecute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 2,
        "wmc": 27,
        "ccn": 20,
        "ccnMethodMax": 7,
        "externals": [
            "Query",
            "SelectQueryInterface",
            "FieldsOverlapException",
            "NoFieldsException"
        ],
        "parents": [
            "Query"
        ],
        "lcom": 1,
        "length": 196,
        "vocabulary": 42,
        "volume": 1056.89,
        "difficulty": 17.59,
        "effort": 18591.73,
        "level": 0.06,
        "bugs": 0.35,
        "time": 1033,
        "intelligentContent": 60.08,
        "number_operators": 67,
        "number_operands": 129,
        "number_operators_unique": 9,
        "number_operands_unique": 33,
        "cloc": 165,
        "loc": 270,
        "lloc": 106,
        "mi": 78.76,
        "mIwoC": 31.96,
        "commentWeight": 46.8,
        "kanDefect": 1.52,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 1.2,
        "relativeSystemComplexity": 82.2,
        "totalStructuralComplexity": 648,
        "totalDataComplexity": 9.6,
        "totalSystemComplexity": 657.6,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 4,
        "instability": 0.57,
        "violations": {}
    },
    {
        "name": "DeleteQuery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "condition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "conditions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "arguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 16,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "Query",
            "QueryConditionInterface",
            "DatabaseConnection",
            "DatabaseCondition",
            "SelectQueryInterface",
            "SelectQueryInterface",
            "DatabaseConnection",
            "QueryPlaceholderInterface"
        ],
        "parents": [
            "Query"
        ],
        "lcom": 1,
        "length": 110,
        "vocabulary": 29,
        "volume": 534.38,
        "difficulty": 8.65,
        "effort": 4620.14,
        "level": 0.12,
        "bugs": 0.18,
        "time": 257,
        "intelligentContent": 61.81,
        "number_operators": 27,
        "number_operands": 83,
        "number_operators_unique": 5,
        "number_operands_unique": 24,
        "cloc": 66,
        "loc": 139,
        "lloc": 74,
        "mi": 83.25,
        "mIwoC": 39.45,
        "commentWeight": 43.8,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.94,
        "relativeSystemComplexity": 144.94,
        "totalStructuralComplexity": 1728,
        "totalDataComplexity": 11.23,
        "totalSystemComplexity": 1739.23,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 6,
        "instability": 0.86,
        "violations": {}
    },
    {
        "name": "TruncateQuery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Query",
            "DatabaseConnection",
            "DatabaseConnection",
            "QueryPlaceholderInterface"
        ],
        "parents": [
            "Query"
        ],
        "lcom": 1,
        "length": 43,
        "vocabulary": 17,
        "volume": 175.76,
        "difficulty": 3.43,
        "effort": 602.61,
        "level": 0.29,
        "bugs": 0.06,
        "time": 33,
        "intelligentContent": 51.26,
        "number_operators": 11,
        "number_operands": 32,
        "number_operators_unique": 3,
        "number_operands_unique": 14,
        "cloc": 35,
        "loc": 58,
        "lloc": 24,
        "mi": 100.43,
        "mIwoC": 53.77,
        "commentWeight": 46.66,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.85,
        "relativeSystemComplexity": 16.85,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 3.4,
        "totalSystemComplexity": 67.4,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "UpdateQuery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "condition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "conditions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "arguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fields",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expression",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 13,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 13,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 23,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [
            "Query",
            "QueryConditionInterface",
            "DatabaseConnection",
            "DatabaseCondition",
            "SelectQueryInterface",
            "SelectQueryInterface",
            "DatabaseConnection",
            "QueryPlaceholderInterface"
        ],
        "parents": [
            "Query"
        ],
        "lcom": 1,
        "length": 190,
        "vocabulary": 41,
        "volume": 1017.93,
        "difficulty": 12.26,
        "effort": 12476.97,
        "level": 0.08,
        "bugs": 0.34,
        "time": 693,
        "intelligentContent": 83.05,
        "number_operators": 47,
        "number_operands": 143,
        "number_operators_unique": 6,
        "number_operands_unique": 35,
        "cloc": 124,
        "loc": 231,
        "lloc": 108,
        "mi": 78.57,
        "mIwoC": 33.24,
        "commentWeight": 45.33,
        "kanDefect": 1.28,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 1.1,
        "relativeSystemComplexity": 145.1,
        "totalStructuralComplexity": 2016,
        "totalDataComplexity": 15.38,
        "totalSystemComplexity": 2031.38,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 6,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "MergeQuery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "conditionTable",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateFields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expression",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insertFields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useDefaults",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "key",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "condition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "conditions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "arguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 19,
        "nbMethods": 17,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 17,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 2,
        "wmc": 34,
        "ccn": 16,
        "ccnMethodMax": 10,
        "externals": [
            "Query",
            "QueryConditionInterface",
            "DatabaseConnection",
            "DatabaseCondition",
            "SelectQueryInterface",
            "SelectQueryInterface",
            "DatabaseConnection",
            "QueryPlaceholderInterface",
            "InvalidMergeQueryException"
        ],
        "parents": [
            "Query"
        ],
        "lcom": 2,
        "length": 213,
        "vocabulary": 31,
        "volume": 1055.24,
        "difficulty": 12,
        "effort": 12662.93,
        "level": 0.08,
        "bugs": 0.35,
        "time": 703,
        "intelligentContent": 87.94,
        "number_operators": 51,
        "number_operands": 162,
        "number_operators_unique": 4,
        "number_operands_unique": 27,
        "cloc": 262,
        "loc": 420,
        "lloc": 158,
        "mi": 75.73,
        "mIwoC": 28.72,
        "commentWeight": 47.02,
        "kanDefect": 1.47,
        "relativeStructuralComplexity": 484,
        "relativeDataComplexity": 0.84,
        "relativeSystemComplexity": 484.84,
        "totalStructuralComplexity": 9196,
        "totalDataComplexity": 16,
        "totalSystemComplexity": 9212,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseCondition",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "condition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "conditions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "arguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__clone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mapConditionOperator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 13,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 32,
        "ccn": 19,
        "ccnMethodMax": 10,
        "externals": [
            "QueryConditionInterface",
            "Countable",
            "SelectQueryInterface",
            "SelectQueryInterface",
            "DatabaseConnection",
            "QueryPlaceholderInterface"
        ],
        "parents": [],
        "lcom": 1,
        "length": 326,
        "vocabulary": 57,
        "volume": 1901.52,
        "difficulty": 14.65,
        "effort": 27851.71,
        "level": 0.07,
        "bugs": 0.63,
        "time": 1547,
        "intelligentContent": 129.82,
        "number_operators": 77,
        "number_operands": 249,
        "number_operators_unique": 6,
        "number_operands_unique": 51,
        "cloc": 102,
        "loc": 257,
        "lloc": 155,
        "mi": 68.12,
        "mIwoC": 26.7,
        "commentWeight": 41.41,
        "kanDefect": 1.68,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 1.99,
        "relativeSystemComplexity": 37.99,
        "totalStructuralComplexity": 504,
        "totalDataComplexity": 27.86,
        "totalSystemComplexity": 531.86,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 7,
        "efferentCoupling": 5,
        "instability": 0.42,
        "violations": {}
    },
    {
        "name": "DatabaseSchema",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextPlaceholder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPrefixInfo",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prefixNonTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildTableNameCondition",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tableExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findTables",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFieldTypeMap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "renameTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldSetDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldSetNoDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "indexExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUniqueKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropUniqueKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "changeField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldNames",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepareComment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 26,
        "nbMethods": 25,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 23,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 32,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "QueryPlaceholderInterface",
            "DatabaseCondition",
            "DatabaseSchemaObjectExistsException"
        ],
        "parents": [],
        "lcom": 17,
        "length": 220,
        "vocabulary": 51,
        "volume": 1247.93,
        "difficulty": 9.89,
        "effort": 12343.69,
        "level": 0.1,
        "bugs": 0.42,
        "time": 686,
        "intelligentContent": 126.16,
        "number_operators": 38,
        "number_operands": 182,
        "number_operators_unique": 5,
        "number_operands_unique": 46,
        "cloc": 536,
        "loc": 642,
        "lloc": 106,
        "mi": 82.6,
        "mIwoC": 33.2,
        "commentWeight": 49.4,
        "kanDefect": 0.89,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.78,
        "relativeSystemComplexity": 169.78,
        "totalStructuralComplexity": 4394,
        "totalDataComplexity": 20.29,
        "totalSystemComplexity": 4414.29,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "DatabaseSchemaObjectExistsException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 7,
        "loc": 11,
        "lloc": 4,
        "mi": 218.22,
        "mIwoC": 171,
        "commentWeight": 47.22,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 4,
        "efferentCoupling": 1,
        "instability": 0.2,
        "violations": {}
    },
    {
        "name": "DatabaseSchemaObjectDoesNotExistException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 7,
        "loc": 11,
        "lloc": 4,
        "mi": 218.22,
        "mIwoC": 171,
        "commentWeight": 47.22,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 1,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "SelectQueryExtender",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextPlaceholder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasAllTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasAnyTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMetaData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMetaData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "condition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "conditions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "arguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingConditions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingArguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "having",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingCompile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExpressions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOrderBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGroupBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTables",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUnion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isPrepared",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "preExecute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "distinct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addExpression",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "join",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "innerJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "leftJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rightJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderRandom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "range",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "union",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "groupBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__clone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 52,
        "nbMethods": 51,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 51,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 57,
        "ccn": 6,
        "ccnMethodMax": 2,
        "externals": [
            "SelectQueryInterface",
            "SelectQueryInterface",
            "DatabaseConnection",
            "DatabaseConnection",
            "QueryPlaceholderInterface",
            "DatabaseConnection",
            "class",
            "QueryPlaceholderInterface",
            "SelectQueryInterface",
            "SelectQueryInterface",
            "SelectQueryInterface",
            "SelectQueryInterface"
        ],
        "parents": [],
        "lcom": 2,
        "length": 314,
        "vocabulary": 47,
        "volume": 1744.14,
        "difficulty": 8.49,
        "effort": 14805.38,
        "level": 0.12,
        "bugs": 0.58,
        "time": 823,
        "intelligentContent": 205.47,
        "number_operators": 65,
        "number_operands": 249,
        "number_operators_unique": 3,
        "number_operands_unique": 44,
        "cloc": 51,
        "loc": 309,
        "lloc": 258,
        "mi": 53.32,
        "mIwoC": 23.89,
        "commentWeight": 29.43,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 1681,
        "relativeDataComplexity": 1.27,
        "relativeSystemComplexity": 1682.27,
        "totalStructuralComplexity": 87412,
        "totalDataComplexity": 65.98,
        "totalSystemComplexity": 87477.98,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 4,
        "instability": 0.57,
        "violations": {}
    },
    {
        "name": "SelectQuery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasAllTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasAnyTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMetaData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMetaData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "condition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "conditions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "arguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingConditions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingArguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "having",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingCompile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingIsNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingIsNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingNotExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFields",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExpressions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOrderBy",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGroupBy",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTables",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUnion",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isPrepared",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "preExecute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "distinct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addExpression",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "join",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "innerJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "leftJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rightJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderRandom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "range",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "union",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "groupBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__clone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 54,
        "nbMethods": 47,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 47,
        "nbMethodsGetter": 7,
        "nbMethodsSetters": 0,
        "wmc": 117,
        "ccn": 64,
        "ccnMethodMax": 21,
        "externals": [
            "Query",
            "SelectQueryInterface",
            "DatabaseConnection",
            "DatabaseCondition",
            "DatabaseCondition",
            "SelectQueryInterface",
            "SelectQueryInterface",
            "DatabaseConnection",
            "QueryPlaceholderInterface",
            "DatabaseConnection",
            "extender_name",
            "SelectQueryInterface",
            "SelectQueryInterface",
            "QueryPlaceholderInterface",
            "SelectQueryInterface",
            "SelectQueryInterface"
        ],
        "parents": [
            "Query"
        ],
        "lcom": 1,
        "length": 836,
        "vocabulary": 100,
        "volume": 5554.26,
        "difficulty": 34.39,
        "effort": 191004.96,
        "level": 0.03,
        "bugs": 1.85,
        "time": 10611,
        "intelligentContent": 161.51,
        "number_operators": 217,
        "number_operands": 619,
        "number_operators_unique": 10,
        "number_operands_unique": 90,
        "cloc": 160,
        "loc": 624,
        "lloc": 465,
        "mi": 42.31,
        "mIwoC": 6.98,
        "commentWeight": 35.32,
        "kanDefect": 7.35,
        "relativeStructuralComplexity": 729,
        "relativeDataComplexity": 1.98,
        "relativeSystemComplexity": 730.98,
        "totalStructuralComplexity": 39366,
        "totalDataComplexity": 106.68,
        "totalSystemComplexity": 39472.68,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 6,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "DatabaseConnection_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sqlFunctionIf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sqlFunctionGreatest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sqlFunctionConcat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sqlFunctionSubstring",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sqlFunctionSubstringIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sqlFunctionRand",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepare",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PDOPrepare",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryRange",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryTemporary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "databaseType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mapConditionOperator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepareQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rollback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pushTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "popTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 20,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 20,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 59,
        "ccn": 40,
        "ccnMethodMax": 9,
        "externals": [
            "DatabaseConnection",
            "DatabaseStatement_sqlite",
            "DatabaseTransactionNoActiveException",
            "PDO",
            "DatabaseTransactionNameNonUniqueException",
            "PDO",
            "DatabaseTransactionNoActiveException",
            "PDO",
            "PDO",
            "DatabaseTransactionCommitFailedException"
        ],
        "parents": [
            "DatabaseConnection"
        ],
        "lcom": 12,
        "length": 375,
        "vocabulary": 105,
        "volume": 2517.84,
        "difficulty": 29.94,
        "effort": 75374.24,
        "level": 0.03,
        "bugs": 0.84,
        "time": 4187,
        "intelligentContent": 84.11,
        "number_operators": 104,
        "number_operands": 271,
        "number_operators_unique": 19,
        "number_operands_unique": 86,
        "cloc": 117,
        "loc": 334,
        "lloc": 217,
        "mi": 59.52,
        "mIwoC": 19.84,
        "commentWeight": 39.69,
        "kanDefect": 3.19,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 1.96,
        "relativeSystemComplexity": 145.96,
        "totalStructuralComplexity": 2880,
        "totalDataComplexity": 39.15,
        "totalSystemComplexity": 2919.15,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseStatement_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getStatement",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 22,
        "ccnMethodMax": 12,
        "externals": [
            "DatabaseStatementPrefetch",
            "Iterator",
            "DatabaseStatementInterface"
        ],
        "parents": [
            "DatabaseStatementPrefetch"
        ],
        "lcom": 1,
        "length": 180,
        "vocabulary": 39,
        "volume": 951.37,
        "difficulty": 23.1,
        "effort": 21979.98,
        "level": 0.04,
        "bugs": 0.32,
        "time": 1221,
        "intelligentContent": 41.18,
        "number_operators": 46,
        "number_operands": 134,
        "number_operators_unique": 10,
        "number_operands_unique": 29,
        "cloc": 46,
        "loc": 124,
        "lloc": 78,
        "mi": 75.4,
        "mIwoC": 34.91,
        "commentWeight": 40.48,
        "kanDefect": 2.14,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 5.33,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 2.67,
        "totalSystemComplexity": 10.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "DatabaseTasks_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "minimumVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFormOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateDatabaseSettings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "DatabaseTasks",
            "SplFileInfo"
        ],
        "parents": [
            "DatabaseTasks"
        ],
        "lcom": 4,
        "length": 64,
        "vocabulary": 27,
        "volume": 304.31,
        "difficulty": 4.26,
        "effort": 1296.64,
        "level": 0.23,
        "bugs": 0.1,
        "time": 72,
        "intelligentContent": 71.42,
        "number_operators": 15,
        "number_operands": 49,
        "number_operators_unique": 4,
        "number_operands_unique": 23,
        "cloc": 14,
        "loc": 46,
        "lloc": 32,
        "mi": 87.09,
        "mIwoC": 49.37,
        "commentWeight": 37.72,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 5.5,
        "totalStructuralComplexity": 16,
        "totalDataComplexity": 6,
        "totalSystemComplexity": 22,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "InsertQuery_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "InsertQuery"
        ],
        "parents": [
            "InsertQuery"
        ],
        "lcom": 1,
        "length": 64,
        "vocabulary": 20,
        "volume": 276.6,
        "difficulty": 4.63,
        "effort": 1279.29,
        "level": 0.22,
        "bugs": 0.09,
        "time": 71,
        "intelligentContent": 59.81,
        "number_operators": 27,
        "number_operands": 37,
        "number_operators_unique": 4,
        "number_operands_unique": 16,
        "cloc": 21,
        "loc": 44,
        "lloc": 24,
        "mi": 95.99,
        "mIwoC": 52.12,
        "commentWeight": 43.87,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 10.25,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 20.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "UpdateQuery_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "removeFieldsInCondition",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 8,
        "ccnMethodMax": 6,
        "externals": [
            "UpdateQuery",
            "QueryConditionInterface",
            "DatabaseCondition"
        ],
        "parents": [
            "UpdateQuery"
        ],
        "lcom": 1,
        "length": 62,
        "vocabulary": 17,
        "volume": 253.42,
        "difficulty": 10.63,
        "effort": 2692.62,
        "level": 0.09,
        "bugs": 0.08,
        "time": 150,
        "intelligentContent": 23.85,
        "number_operators": 11,
        "number_operands": 51,
        "number_operators_unique": 5,
        "number_operands_unique": 12,
        "cloc": 25,
        "loc": 64,
        "lloc": 39,
        "mi": 88.58,
        "mIwoC": 47.38,
        "commentWeight": 41.19,
        "kanDefect": 0.89,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.33,
        "relativeSystemComplexity": 64.33,
        "totalStructuralComplexity": 128,
        "totalDataComplexity": 0.67,
        "totalSystemComplexity": 128.67,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DeleteQuery_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "DeleteQuery"
        ],
        "parents": [
            "DeleteQuery"
        ],
        "lcom": 1,
        "length": 14,
        "vocabulary": 8,
        "volume": 42,
        "difficulty": 4,
        "effort": 168,
        "level": 0.25,
        "bugs": 0.01,
        "time": 9,
        "intelligentContent": 10.5,
        "number_operators": 6,
        "number_operands": 8,
        "number_operators_unique": 4,
        "number_operands_unique": 4,
        "cloc": 10,
        "loc": 24,
        "lloc": 14,
        "mi": 105.44,
        "mIwoC": 63.36,
        "commentWeight": 42.07,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.4,
        "relativeSystemComplexity": 16.4,
        "totalStructuralComplexity": 16,
        "totalDataComplexity": 0.4,
        "totalSystemComplexity": 16.4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "TruncateQuery_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "TruncateQuery"
        ],
        "parents": [
            "TruncateQuery"
        ],
        "lcom": 1,
        "length": 19,
        "vocabulary": 11,
        "volume": 65.73,
        "difficulty": 2.25,
        "effort": 147.89,
        "level": 0.44,
        "bugs": 0.02,
        "time": 8,
        "intelligentContent": 29.21,
        "number_operators": 7,
        "number_operands": 12,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 8,
        "loc": 16,
        "lloc": 9,
        "mi": 110.64,
        "mIwoC": 66.19,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseSchema_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "tableExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createTableSql",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createIndexSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createColumsSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createKeySql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "processField",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFieldSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFieldTypeMap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "renameTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alterTable",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "introspectSchema",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "changeField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mapKeyDefinition",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "indexExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropIndex",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUniqueKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropUniqueKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldSetDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldSetNoDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findTables",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 27,
        "nbMethods": 27,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 19,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 114,
        "ccn": 88,
        "ccnMethodMax": 12,
        "externals": [
            "DatabaseSchema",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "Exception",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectExistsException",
            "DatabaseSchemaObjectDoesNotExistException",
            "DatabaseSchemaObjectDoesNotExistException"
        ],
        "parents": [
            "DatabaseSchema"
        ],
        "lcom": 1,
        "length": 1213,
        "vocabulary": 174,
        "volume": 9028.29,
        "difficulty": 34.37,
        "effort": 310305.69,
        "level": 0.03,
        "bugs": 3.01,
        "time": 17239,
        "intelligentContent": 262.68,
        "number_operators": 285,
        "number_operands": 928,
        "number_operators_unique": 12,
        "number_operands_unique": 162,
        "cloc": 138,
        "loc": 560,
        "lloc": 422,
        "mi": 37.97,
        "mIwoC": 3.2,
        "commentWeight": 34.77,
        "kanDefect": 8.97,
        "relativeStructuralComplexity": 784,
        "relativeDataComplexity": 0.86,
        "relativeSystemComplexity": 784.86,
        "totalStructuralComplexity": 21168,
        "totalDataComplexity": 23.31,
        "totalSystemComplexity": 21191.31,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "SelectQuery_sqlite",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "forUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "SelectQuery"
        ],
        "parents": [
            "SelectQuery"
        ],
        "lcom": 1,
        "length": 3,
        "vocabulary": 3,
        "volume": 4.75,
        "difficulty": 0.5,
        "effort": 2.38,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 1,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 13,
        "loc": 21,
        "lloc": 8,
        "mi": 122.36,
        "mIwoC": 75.43,
        "commentWeight": 46.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DrupalDefaultEntityController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildQuery",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "attachLoad",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cacheGet",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cacheSet",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 45,
        "ccn": 39,
        "ccnMethodMax": 18,
        "externals": [
            "DrupalEntityControllerInterface"
        ],
        "parents": [],
        "lcom": 1,
        "length": 294,
        "vocabulary": 52,
        "volume": 1675.93,
        "difficulty": 20.36,
        "effort": 34128.01,
        "level": 0.05,
        "bugs": 0.56,
        "time": 1896,
        "intelligentContent": 82.3,
        "number_operators": 70,
        "number_operands": 224,
        "number_operators_unique": 8,
        "number_operands_unique": 44,
        "cloc": 155,
        "loc": 304,
        "lloc": 149,
        "mi": 69.47,
        "mIwoC": 24.77,
        "commentWeight": 44.7,
        "kanDefect": 3.23,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0.43,
        "relativeSystemComplexity": 100.43,
        "totalStructuralComplexity": 700,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 703,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "EntityFieldQueryException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 7,
        "loc": 11,
        "lloc": 4,
        "mi": 218.22,
        "mIwoC": 171,
        "commentWeight": 47.22,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "EntityFieldQuery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "entityCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "propertyCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "entityOrderBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldOrderBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "propertyOrderBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "range",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pager",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tableSort",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleted",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "age",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMetaData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "propertyQuery",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initializePager",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "finishQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 19,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 18,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 62,
        "ccn": 43,
        "ccnMethodMax": 14,
        "externals": [
            "EntityFieldQueryException",
            "EntityFieldQueryException",
            "EntityFieldQueryException",
            "EntityFieldQueryException",
            "EntityFieldQueryException",
            "SelectQuery"
        ],
        "parents": [],
        "lcom": 1,
        "length": 576,
        "vocabulary": 93,
        "volume": 3766.56,
        "difficulty": 30.65,
        "effort": 115454.11,
        "level": 0.03,
        "bugs": 1.26,
        "time": 6414,
        "intelligentContent": 122.88,
        "number_operators": 119,
        "number_operands": 457,
        "number_operators_unique": 11,
        "number_operands_unique": 82,
        "cloc": 496,
        "loc": 759,
        "lloc": 263,
        "mi": 63.87,
        "mIwoC": 16.39,
        "commentWeight": 47.49,
        "kanDefect": 3.89,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 1.34,
        "relativeSystemComplexity": 257.34,
        "totalStructuralComplexity": 5120,
        "totalDataComplexity": 26.76,
        "totalSystemComplexity": 5146.76,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "FileTransfer",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connect",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "chmod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkPath",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fixRemotePath",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sanitizePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyFileJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeFileJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findChroot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setChroot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSettingsForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 23,
        "nbMethods": 22,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 14,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 38,
        "ccn": 16,
        "ccnMethodMax": 5,
        "externals": [
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "SkipDotsRecursiveDirectoryIterator",
            "RecursiveIteratorIterator"
        ],
        "parents": [],
        "lcom": 3,
        "length": 317,
        "vocabulary": 65,
        "volume": 1909.09,
        "difficulty": 22.36,
        "effort": 42694.21,
        "level": 0.04,
        "bugs": 0.64,
        "time": 2372,
        "intelligentContent": 85.37,
        "number_operators": 71,
        "number_operands": 246,
        "number_operators_unique": 10,
        "number_operands_unique": 55,
        "cloc": 177,
        "loc": 330,
        "lloc": 153,
        "mi": 72.54,
        "mIwoC": 27.22,
        "commentWeight": 45.32,
        "kanDefect": 1.38,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 0.48,
        "relativeSystemComplexity": 324.48,
        "totalStructuralComplexity": 7452,
        "totalDataComplexity": 11.11,
        "totalSystemComplexity": 7463.11,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "FileTransferException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 1,
        "length": 9,
        "vocabulary": 6,
        "volume": 23.26,
        "difficulty": 0.8,
        "effort": 18.61,
        "level": 1.25,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 29.08,
        "number_operators": 1,
        "number_operands": 8,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 3,
        "loc": 13,
        "lloc": 10,
        "mi": 102.35,
        "mIwoC": 68.48,
        "commentWeight": 33.87,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 2.5,
        "package": "\\",
        "pageRank": 0.02,
        "afferentCoupling": 5,
        "efferentCoupling": 1,
        "instability": 0.17,
        "violations": {}
    },
    {
        "name": "SkipDotsRecursiveDirectoryIterator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "RecursiveDirectoryIterator"
        ],
        "parents": [
            "RecursiveDirectoryIterator"
        ],
        "lcom": 2,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 15,
        "loc": 30,
        "lloc": 15,
        "mi": 112.92,
        "mIwoC": 68.46,
        "commentWeight": 44.46,
        "kanDefect": 0.38,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.17,
        "relativeSystemComplexity": 4.17,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 0.33,
        "totalSystemComplexity": 8.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "FileTransferFTP",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSettingsForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 6,
        "ccnMethodMax": 6,
        "externals": [
            "FileTransfer",
            "FileTransferException",
            "class"
        ],
        "parents": [
            "FileTransfer"
        ],
        "lcom": 3,
        "length": 75,
        "vocabulary": 20,
        "volume": 324.14,
        "difficulty": 5.38,
        "effort": 1744.66,
        "level": 0.19,
        "bugs": 0.11,
        "time": 97,
        "intelligentContent": 60.22,
        "number_operators": 14,
        "number_operands": 61,
        "number_operators_unique": 3,
        "number_operands_unique": 17,
        "cloc": 16,
        "loc": 47,
        "lloc": 31,
        "mi": 88.37,
        "mIwoC": 49.08,
        "commentWeight": 39.29,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.17,
        "relativeSystemComplexity": 3.17,
        "totalStructuralComplexity": 3,
        "totalDataComplexity": 6.5,
        "totalSystemComplexity": 9.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "FileTransferFTPExtension",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyFileJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeFileJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "chmodJailed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 26,
        "ccn": 19,
        "ccnMethodMax": 8,
        "externals": [
            "FileTransferFTP",
            "FileTransferChmodInterface",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException"
        ],
        "parents": [
            "FileTransferFTP"
        ],
        "lcom": 1,
        "length": 138,
        "vocabulary": 39,
        "volume": 729.39,
        "difficulty": 13.42,
        "effort": 9787.88,
        "level": 0.07,
        "bugs": 0.24,
        "time": 544,
        "intelligentContent": 54.35,
        "number_operators": 34,
        "number_operands": 104,
        "number_operators_unique": 8,
        "number_operands_unique": 31,
        "cloc": 1,
        "loc": 88,
        "lloc": 87,
        "mi": 43.31,
        "mIwoC": 35.09,
        "commentWeight": 8.22,
        "kanDefect": 1.59,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.85,
        "relativeSystemComplexity": 16.85,
        "totalStructuralComplexity": 128,
        "totalDataComplexity": 6.8,
        "totalSystemComplexity": 134.8,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "FileTransferLocal",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyFileJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeFileJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "chmodJailed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 25,
        "ccn": 17,
        "ccnMethodMax": 8,
        "externals": [
            "FileTransfer",
            "FileTransferChmodInterface",
            "FileTransferLocal",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "SkipDotsRecursiveDirectoryIterator",
            "RecursiveIteratorIterator",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "SkipDotsRecursiveDirectoryIterator",
            "RecursiveIteratorIterator",
            "FileTransferException",
            "FileTransferException"
        ],
        "parents": [
            "FileTransfer"
        ],
        "lcom": 9,
        "length": 83,
        "vocabulary": 25,
        "volume": 385.44,
        "difficulty": 4.64,
        "effort": 1787.04,
        "level": 0.22,
        "bugs": 0.13,
        "time": 99,
        "intelligentContent": 83.13,
        "number_operators": 15,
        "number_operands": 68,
        "number_operators_unique": 3,
        "number_operands_unique": 22,
        "cloc": 6,
        "loc": 75,
        "lloc": 69,
        "mi": 60.71,
        "mIwoC": 39.49,
        "commentWeight": 21.21,
        "kanDefect": 1.31,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.44,
        "relativeSystemComplexity": 5.44,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 13,
        "totalSystemComplexity": 49,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 7,
        "instability": 0.78,
        "violations": {}
    },
    {
        "name": "FileTransferSSH",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyFileJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeDirectoryJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeFileJailed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "chmodJailed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSettingsForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 29,
        "ccn": 18,
        "ccnMethodMax": 5,
        "externals": [
            "FileTransfer",
            "FileTransferChmodInterface",
            "FileTransferException",
            "FileTransferException",
            "FileTransferSSH",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException",
            "FileTransferException"
        ],
        "parents": [
            "FileTransfer"
        ],
        "lcom": 3,
        "length": 203,
        "vocabulary": 53,
        "volume": 1162.77,
        "difficulty": 8.28,
        "effort": 9629.17,
        "level": 0.12,
        "bugs": 0.39,
        "time": 535,
        "intelligentContent": 140.41,
        "number_operators": 44,
        "number_operands": 159,
        "number_operators_unique": 5,
        "number_operands_unique": 48,
        "cloc": 10,
        "loc": 109,
        "lloc": 99,
        "mi": 55.19,
        "mIwoC": 32.58,
        "commentWeight": 22.61,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.79,
        "relativeSystemComplexity": 4.79,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 45.5,
        "totalSystemComplexity": 57.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 5,
        "instability": 0.71,
        "violations": {}
    },
    {
        "name": "DatabaseTasks",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "hasPdoDriver",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fail",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "installable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "minimumVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runTasks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connect",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runTestQuery",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkEngineVersion",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFormOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateDatabaseSettings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 6,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 36,
        "ccn": 25,
        "ccnMethodMax": 9,
        "externals": [
            "PDO",
            "DatabaseTaskException",
            "DatabaseTaskException",
            "Database",
            "Database",
            "Database"
        ],
        "parents": [],
        "lcom": 3,
        "length": 302,
        "vocabulary": 104,
        "volume": 2023.53,
        "difficulty": 11.94,
        "effort": 24154.59,
        "level": 0.08,
        "bugs": 0.67,
        "time": 1342,
        "intelligentContent": 169.52,
        "number_operators": 50,
        "number_operands": 252,
        "number_operators_unique": 9,
        "number_operands_unique": 95,
        "cloc": 82,
        "loc": 203,
        "lloc": 121,
        "mi": 69.71,
        "mIwoC": 28.05,
        "commentWeight": 41.65,
        "kanDefect": 1.24,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0.79,
        "relativeSystemComplexity": 100.79,
        "totalStructuralComplexity": 1200,
        "totalDataComplexity": 9.45,
        "totalSystemComplexity": 1209.45,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "DatabaseTaskException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "PagerDefault",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ensureElement",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCountQuery",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCountQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "limit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "element",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 6,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 12,
        "ccn": 6,
        "ccnMethodMax": 3,
        "externals": [
            "SelectQueryExtender",
            "SelectQueryInterface",
            "DatabaseConnection",
            "SelectQueryInterface"
        ],
        "parents": [
            "SelectQueryExtender"
        ],
        "lcom": 2,
        "length": 65,
        "vocabulary": 17,
        "volume": 265.69,
        "difficulty": 11.73,
        "effort": 3115.76,
        "level": 0.09,
        "bugs": 0.09,
        "time": 173,
        "intelligentContent": 22.66,
        "number_operators": 22,
        "number_operands": 43,
        "number_operators_unique": 6,
        "number_operands_unique": 11,
        "cloc": 98,
        "loc": 156,
        "lloc": 58,
        "mi": 90.84,
        "mIwoC": 43.75,
        "commentWeight": 47.09,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.77,
        "relativeSystemComplexity": 81.77,
        "totalStructuralComplexity": 567,
        "totalDataComplexity": 5.4,
        "totalSystemComplexity": 572.4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DrupalLocalStreamWrapper",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "getDirectoryPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUri",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUri",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTarget",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMimeType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "chmod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "realpath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocalPath",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_open",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_lock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_read",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_write",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_eof",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_seek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_flush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_tell",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_stat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream_close",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unlink",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dirname",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mkdir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rmdir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "url_stat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dir_opendir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dir_readdir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dir_rewinddir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dir_closedir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 28,
        "nbMethods": 26,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 24,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 48,
        "ccn": 21,
        "ccnMethodMax": 6,
        "externals": [
            "DrupalStreamWrapperInterface"
        ],
        "parents": [],
        "lcom": 2,
        "length": 292,
        "vocabulary": 48,
        "volume": 1630.81,
        "difficulty": 25.26,
        "effort": 41199.39,
        "level": 0.04,
        "bugs": 0.54,
        "time": 2289,
        "intelligentContent": 64.55,
        "number_operators": 100,
        "number_operands": 192,
        "number_operators_unique": 10,
        "number_operands_unique": 38,
        "cloc": 320,
        "loc": 507,
        "lloc": 187,
        "mi": 72.26,
        "mIwoC": 25.12,
        "commentWeight": 47.14,
        "kanDefect": 1.29,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 8.25,
        "relativeSystemComplexity": 17.25,
        "totalStructuralComplexity": 252,
        "totalDataComplexity": 231,
        "totalSystemComplexity": 483,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 1,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "DrupalPublicStreamWrapper",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getDirectoryPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExternalUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "DrupalLocalStreamWrapper"
        ],
        "parents": [
            "DrupalLocalStreamWrapper"
        ],
        "lcom": 2,
        "length": 19,
        "vocabulary": 11,
        "volume": 65.73,
        "difficulty": 2.06,
        "effort": 135.57,
        "level": 0.48,
        "bugs": 0.02,
        "time": 8,
        "intelligentContent": 31.87,
        "number_operators": 8,
        "number_operands": 11,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 14,
        "loc": 27,
        "lloc": 13,
        "mi": 107.75,
        "mIwoC": 62.84,
        "commentWeight": 44.91,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.67,
        "relativeSystemComplexity": 4.67,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 1.33,
        "totalSystemComplexity": 9.33,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DrupalPrivateStreamWrapper",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getDirectoryPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExternalUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "DrupalLocalStreamWrapper"
        ],
        "parents": [
            "DrupalLocalStreamWrapper"
        ],
        "lcom": 2,
        "length": 13,
        "vocabulary": 11,
        "volume": 44.97,
        "difficulty": 1.69,
        "effort": 75.89,
        "level": 0.59,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 26.65,
        "number_operators": 4,
        "number_operands": 9,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 16,
        "loc": 29,
        "lloc": 13,
        "mi": 109.64,
        "mIwoC": 63.99,
        "commentWeight": 45.65,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DrupalTemporaryStreamWrapper",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getDirectoryPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExternalUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "DrupalLocalStreamWrapper"
        ],
        "parents": [
            "DrupalLocalStreamWrapper"
        ],
        "lcom": 2,
        "length": 12,
        "vocabulary": 10,
        "volume": 39.86,
        "difficulty": 1.71,
        "effort": 68.34,
        "level": 0.58,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 23.25,
        "number_operators": 4,
        "number_operands": 8,
        "number_operators_unique": 3,
        "number_operands_unique": 7,
        "cloc": 14,
        "loc": 27,
        "lloc": 13,
        "mi": 109.27,
        "mIwoC": 64.36,
        "commentWeight": 44.91,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 4,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "TableSort",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderByHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "init",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSort",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueryParameters",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "order",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 24,
        "ccn": 19,
        "ccnMethodMax": 12,
        "externals": [
            "SelectQueryExtender",
            "SelectQueryInterface",
            "DatabaseConnection"
        ],
        "parents": [
            "SelectQueryExtender"
        ],
        "lcom": 2,
        "length": 152,
        "vocabulary": 29,
        "volume": 738.41,
        "difficulty": 18.14,
        "effort": 13392.13,
        "level": 0.06,
        "bugs": 0.25,
        "time": 744,
        "intelligentContent": 40.71,
        "number_operators": 38,
        "number_operands": 114,
        "number_operators_unique": 7,
        "number_operands_unique": 22,
        "cloc": 61,
        "loc": 131,
        "lloc": 70,
        "mi": 80.66,
        "mIwoC": 37.11,
        "commentWeight": 43.55,
        "kanDefect": 1.1,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.31,
        "relativeSystemComplexity": 50.31,
        "totalStructuralComplexity": 294,
        "totalDataComplexity": 7.88,
        "totalSystemComplexity": 301.88,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DrupalUpdateException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Updater",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUpdaterFromDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findInfoFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProjectName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProjectTitle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstallArgs",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "install",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepareInstallDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeWorldReadable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeBackup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBackupDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postInstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postInstallTasks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postUpdateTasks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 17,
        "nbMethods": 17,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 16,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 35,
        "ccn": 19,
        "ccnMethodMax": 5,
        "externals": [
            "UpdaterException",
            "updater",
            "UpdaterException",
            "UpdaterException",
            "UpdaterException",
            "UpdaterException",
            "UpdaterFileTransferException",
            "UpdaterFileTransferException",
            "UpdaterException"
        ],
        "parents": [],
        "lcom": 6,
        "length": 257,
        "vocabulary": 57,
        "volume": 1499.05,
        "difficulty": 11.76,
        "effort": 17635.91,
        "level": 0.09,
        "bugs": 0.5,
        "time": 980,
        "intelligentContent": 127.42,
        "number_operators": 57,
        "number_operands": 200,
        "number_operators_unique": 6,
        "number_operands_unique": 51,
        "cloc": 166,
        "loc": 321,
        "lloc": 155,
        "mi": 72.3,
        "mIwoC": 27.43,
        "commentWeight": 44.87,
        "kanDefect": 1.45,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 0.78,
        "relativeSystemComplexity": 289.78,
        "totalStructuralComplexity": 4913,
        "totalDataComplexity": 13.33,
        "totalSystemComplexity": 4926.33,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "UpdaterException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 7,
        "loc": 11,
        "lloc": 4,
        "mi": 218.22,
        "mIwoC": 171,
        "commentWeight": 47.22,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0.02,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "UpdaterFileTransferException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "UpdaterException"
        ],
        "parents": [
            "UpdaterException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 7,
        "loc": 11,
        "lloc": 4,
        "mi": 218.22,
        "mIwoC": 171,
        "commentWeight": 47.22,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "FieldValidationException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "FieldException"
        ],
        "parents": [
            "FieldException"
        ],
        "lcom": 1,
        "length": 5,
        "vocabulary": 4,
        "volume": 10,
        "difficulty": 0.67,
        "effort": 6.67,
        "level": 1.5,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 15,
        "number_operators": 1,
        "number_operands": 4,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 20,
        "loc": 30,
        "lloc": 10,
        "mi": 118.73,
        "mIwoC": 71.05,
        "commentWeight": 47.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "SearchQuery",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "searchExpression",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseSearchExpression",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseWord",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeFirstPass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addScore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 48,
        "ccn": 41,
        "ccnMethodMax": 23,
        "externals": [
            "SelectQueryExtender",
            "DatabaseStatementEmpty"
        ],
        "parents": [
            "SelectQueryExtender"
        ],
        "lcom": 1,
        "length": 483,
        "vocabulary": 110,
        "volume": 3275.4,
        "difficulty": 23.86,
        "effort": 78136.78,
        "level": 0.04,
        "bugs": 1.09,
        "time": 4341,
        "intelligentContent": 137.3,
        "number_operators": 127,
        "number_operands": 356,
        "number_operators_unique": 13,
        "number_operands_unique": 97,
        "cloc": 209,
        "loc": 424,
        "lloc": 215,
        "mi": 63.27,
        "mIwoC": 18.99,
        "commentWeight": 44.28,
        "kanDefect": 3.67,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 0.65,
        "relativeSystemComplexity": 361.65,
        "totalStructuralComplexity": 2888,
        "totalDataComplexity": 5.2,
        "totalSystemComplexity": 2893.2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "ArchiverTar",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extract",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listContents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArchive",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "ArchiverInterface",
            "Archive_Tar"
        ],
        "parents": [],
        "lcom": 2,
        "length": 35,
        "vocabulary": 9,
        "volume": 110.95,
        "difficulty": 6.5,
        "effort": 721.16,
        "level": 0.15,
        "bugs": 0.04,
        "time": 40,
        "intelligentContent": 17.07,
        "number_operators": 9,
        "number_operands": 26,
        "number_operators_unique": 3,
        "number_operands_unique": 6,
        "cloc": 27,
        "loc": 66,
        "lloc": 39,
        "mi": 92.39,
        "mIwoC": 50.57,
        "commentWeight": 41.83,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.17,
        "relativeSystemComplexity": 17.17,
        "totalStructuralComplexity": 96,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 103,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "ArchiverZip",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extract",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listContents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArchive",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "ArchiverInterface",
            "ZipArchive",
            "Exception"
        ],
        "parents": [],
        "lcom": 1,
        "length": 49,
        "vocabulary": 14,
        "volume": 186.56,
        "difficulty": 13.13,
        "effort": 2448.61,
        "level": 0.08,
        "bugs": 0.06,
        "time": 136,
        "intelligentContent": 14.21,
        "number_operators": 14,
        "number_operands": 35,
        "number_operators_unique": 6,
        "number_operands_unique": 8,
        "cloc": 21,
        "loc": 64,
        "lloc": 43,
        "mi": 86.7,
        "mIwoC": 47.93,
        "commentWeight": 38.77,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.97,
        "relativeSystemComplexity": 25.97,
        "totalStructuralComplexity": 150,
        "totalDataComplexity": 5.83,
        "totalSystemComplexity": 155.83,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DefaultMailSystem",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "format",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mail",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 7,
        "ccnMethodMax": 7,
        "externals": [
            "MailSystemInterface"
        ],
        "parents": [],
        "lcom": 2,
        "length": 96,
        "vocabulary": 29,
        "volume": 466.37,
        "difficulty": 7.6,
        "effort": 3546.33,
        "level": 0.13,
        "bugs": 0.16,
        "time": 197,
        "intelligentContent": 61.33,
        "number_operators": 23,
        "number_operands": 73,
        "number_operators_unique": 5,
        "number_operands_unique": 24,
        "cloc": 45,
        "loc": 86,
        "lloc": 41,
        "mi": 90.21,
        "mIwoC": 45.19,
        "commentWeight": 45.02,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 6,
        "totalSystemComplexity": 6,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "TestingMailSystem",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "mail",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "DefaultMailSystem",
            "MailSystemInterface"
        ],
        "parents": [
            "DefaultMailSystem"
        ],
        "lcom": 1,
        "length": 10,
        "vocabulary": 5,
        "volume": 23.22,
        "difficulty": 2.33,
        "effort": 54.18,
        "level": 0.43,
        "bugs": 0.01,
        "time": 3,
        "intelligentContent": 9.95,
        "number_operators": 3,
        "number_operands": 7,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 11,
        "loc": 22,
        "lloc": 11,
        "mi": 112.04,
        "mIwoC": 67.58,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DrupalQueue",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 5,
        "ccnMethodMax": 5,
        "externals": [
            "class",
            "class"
        ],
        "parents": [],
        "lcom": 1,
        "length": 40,
        "vocabulary": 14,
        "volume": 152.29,
        "difficulty": 7.78,
        "effort": 1184.51,
        "level": 0.13,
        "bugs": 0.05,
        "time": 66,
        "intelligentContent": 19.58,
        "number_operators": 12,
        "number_operands": 28,
        "number_operators_unique": 5,
        "number_operands_unique": 9,
        "cloc": 76,
        "loc": 97,
        "lloc": 21,
        "mi": 104.21,
        "mIwoC": 55.2,
        "commentWeight": 49.01,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "SystemQueue",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "numberOfItems",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "claimItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "releaseItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createQueue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteQueue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 11,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "DrupalReliableQueueInterface"
        ],
        "parents": [],
        "lcom": 4,
        "length": 67,
        "vocabulary": 23,
        "volume": 303.08,
        "difficulty": 7.22,
        "effort": 2188.9,
        "level": 0.14,
        "bugs": 0.1,
        "time": 122,
        "intelligentContent": 41.96,
        "number_operators": 15,
        "number_operands": 52,
        "number_operators_unique": 5,
        "number_operands_unique": 18,
        "cloc": 27,
        "loc": 80,
        "lloc": 53,
        "mi": 83.64,
        "mIwoC": 44.47,
        "commentWeight": 39.17,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.94,
        "relativeSystemComplexity": 25.94,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 7.5,
        "totalSystemComplexity": 207.5,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "MemoryQueue",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "numberOfItems",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "claimItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "releaseItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createQueue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteQueue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "DrupalQueueInterface",
            "stdClass"
        ],
        "parents": [],
        "lcom": 2,
        "length": 69,
        "vocabulary": 15,
        "volume": 269.58,
        "difficulty": 19.69,
        "effort": 5307.27,
        "level": 0.05,
        "bugs": 0.09,
        "time": 295,
        "intelligentContent": 13.69,
        "number_operators": 24,
        "number_operands": 45,
        "number_operators_unique": 7,
        "number_operands_unique": 8,
        "cloc": 18,
        "loc": 73,
        "lloc": 55,
        "mi": 79.12,
        "mIwoC": 44.34,
        "commentWeight": 34.78,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 5.63,
        "relativeSystemComplexity": 5.63,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 45,
        "totalSystemComplexity": 45,
        "package": "\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Archive_Tar",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extract",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listContent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createModify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addModify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extractModify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extractInString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extractList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAttribute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_warning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_isArchive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openWrite",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openRead",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openReadWrite",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cleanFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeBlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_readBlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_jumpBlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeFooter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeHeaderBlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeLongHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_readHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_maliciousFilename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_readLongHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_extractInString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_extractList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openAppend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_append",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_dirCheck",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_pathReduction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_translateWinPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 42,
        "nbMethods": 42,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 42,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 307,
        "ccn": 266,
        "ccnMethodMax": 59,
        "externals": [
            "Exception",
            "Exception"
        ],
        "parents": [],
        "lcom": 1,
        "length": 2727,
        "vocabulary": 254,
        "volume": 21785.14,
        "difficulty": 97.87,
        "effort": 2132137.64,
        "level": 0.01,
        "bugs": 7.26,
        "time": 118452,
        "intelligentContent": 222.59,
        "number_operators": 934,
        "number_operands": 1793,
        "number_operators_unique": 25,
        "number_operands_unique": 229,
        "cloc": 474,
        "loc": 1609,
        "lloc": 1135,
        "mi": 37.26,
        "mIwoC": 0,
        "commentWeight": 37.26,
        "kanDefect": 16.09,
        "relativeStructuralComplexity": 1024,
        "relativeDataComplexity": 3.23,
        "relativeSystemComplexity": 1027.23,
        "totalStructuralComplexity": 43008,
        "totalDataComplexity": 135.52,
        "totalSystemComplexity": 43143.52,
        "package": " Archive_Tar\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "ModuleUpdater",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getInstallDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInstalled",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "canUpdateDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "canUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSchemaUpdates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postInstallTasks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postUpdateTasks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 7,
        "ccnMethodMax": 5,
        "externals": [
            "Updater",
            "DrupalUpdaterInterface"
        ],
        "parents": [
            "Updater"
        ],
        "lcom": 6,
        "length": 68,
        "vocabulary": 27,
        "volume": 323.33,
        "difficulty": 4.55,
        "effort": 1469.69,
        "level": 0.22,
        "bugs": 0.11,
        "time": 82,
        "intelligentContent": 71.13,
        "number_operators": 28,
        "number_operands": 40,
        "number_operators_unique": 5,
        "number_operands_unique": 22,
        "cloc": 26,
        "loc": 81,
        "lloc": 55,
        "mi": 81.99,
        "mIwoC": 43.52,
        "commentWeight": 38.46,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 10.29,
        "relativeSystemComplexity": 10.29,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 72,
        "totalSystemComplexity": 72,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "ThemeUpdater",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getInstallDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInstalled",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "canUpdateDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "canUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postInstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postInstallTasks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Updater",
            "DrupalUpdaterInterface"
        ],
        "parents": [
            "Updater"
        ],
        "lcom": 5,
        "length": 36,
        "vocabulary": 17,
        "volume": 147.15,
        "difficulty": 3.54,
        "effort": 520.68,
        "level": 0.28,
        "bugs": 0.05,
        "time": 29,
        "intelligentContent": 41.59,
        "number_operators": 13,
        "number_operands": 23,
        "number_operators_unique": 4,
        "number_operands_unique": 13,
        "cloc": 17,
        "loc": 54,
        "lloc": 37,
        "mi": 88.4,
        "mIwoC": 50.21,
        "commentWeight": 38.19,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 6.33,
        "relativeSystemComplexity": 6.33,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 38,
        "totalSystemComplexity": 38,
        "package": "\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    }
]