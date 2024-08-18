// This file is auto-generated by @hey-api/openapi-ts

export type ActorEntity = {
    uid?: string;
    namespace_name: string;
    name: string;
    creationTimestamp: string | null;
    updateTimestamp: string | null;
    deletedTimestamp: string | null;
    labels?: {
        [key: string]: (string);
    };
    annotations?: {
        [key: string]: (string);
    };
};

export type ActorsResult = {
    count?: number | null;
    items?: Array<ActorEntity> | null;
};

export type EventEntity = {
    uid?: string;
    namespace_name: string;
    name: string;
    actor_name: string | null;
    item_name: string | null;
    creationTimestamp: string | null;
    updateTimestamp: string | null;
    deletedTimestamp: string | null;
    labels?: {
        [key: string]: (string);
    };
    annotations?: {
        [key: string]: (string);
    };
    type: string | null;
    value: string | null;
};

export type EventsResult = {
    count?: number | null;
    items?: Array<EventEntity> | null;
};

export type FeedbackEntity = {
    uid?: string;
    namespace_name: string;
    name: string;
    actor_name: string;
    item_name: string;
    creationTimestamp: string | null;
    updateTimestamp: string | null;
    deletedTimestamp: string | null;
    labels?: {
        [key: string]: (string);
    };
    annotations?: {
        [key: string]: (string);
    };
    type: string | null;
    value: string;
};

export type FeedbacksResult = {
    count?: number | null;
    items?: Array<FeedbackEntity> | null;
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type ItemEntity = {
    uid?: string;
    namespace_name: string;
    name: string;
    creationTimestamp: string | null;
    updateTimestamp: string | null;
    deletedTimestamp: string | null;
    labels?: {
        [key: string]: (string);
    };
    annotations?: {
        [key: string]: (string);
    };
};

export type ItemMinMax = {
    uid: string;
    namespace_name: string;
    name: string;
    creationTimestamp: string;
    updateTimestamp: string | null;
    labels: {
        [key: string]: (string);
    };
    annotations: {
        [key: string]: (string);
    };
    count: number;
    min: string | null;
    max: string | null;
};

export type ItemWithEventCount = {
    uid: string;
    namespace_name: string;
    name: string;
    creationTimestamp: string;
    updateTimestamp: string | null;
    labels: {
        [key: string]: (string);
    };
    annotations: {
        [key: string]: (string);
    };
    count: number;
};

export type ItemWithEventDetails = {
    uid: string;
    namespace_name: string;
    name: string;
    creationTimestamp: string;
    updateTimestamp: string | null;
    labels: {
        [key: string]: (string);
    };
    annotations: {
        [key: string]: (string);
    };
    eventUid: string;
    eventName: string;
    eventActor: string | null;
    eventCreated: string | null;
    eventUpdated: string | null;
    eventLabels: {
        [key: string]: (string);
    };
    eventAnnotations: {
        [key: string]: (string);
    };
    eventType: string | null;
    eventValue: string | null;
};

export type ItemWithFeedbackCount = {
    uid: string;
    namespace_name: string;
    name: string;
    creationTimestamp: string;
    updateTimestamp: string | null;
    labels: {
        [key: string]: (string);
    };
    annotations: {
        [key: string]: (string);
    };
    count: number;
};

export type ItemsResult = {
    count?: number | null;
    items?: Array<ItemEntity> | null;
};

export type ListMeta = {
    start?: number | null;
    limit?: number | null;
    itemCount?: number | null;
    remainingItemCount?: number | null;
    next?: string | null;
};

export type MinMax = {
    count: number;
    min: string | null;
    max: string | null;
};

export type Namespace = {
    apiVersion?: string;
    kind?: string;
    meta: NamespaceMeta;
    spec?: NamespaceSpec | null;
};

export type NamespaceFilter = {
    names?: Array<(string)> | null;
    labelSelector?: {
    [key: string]: (string);
} | null;
};

export type NamespaceList = {
    apiVersion?: string;
    kind?: string;
    meta: ListMeta;
    items: Array<Namespace>;
};

export type NamespaceMeta = {
    name?: string | null;
    generateName?: string | null;
    uid?: string;
    title?: string | null;
    description?: string | null;
    labels?: {
    [key: string]: (string);
} | null;
    annotations?: {
    [key: string]: (string);
} | null;
    tags?: Array<(string)> | null;
    creationTimestamp?: string | null;
    updateTimestamp?: string | null;
    deletedTimestamp?: string | null;
};

export type NamespaceQuery = {
    apiVersion?: string;
    kind?: string;
    filter?: NamespaceFilter | null;
    exclude?: NamespaceFilter | null;
    order?: Array<OrderBy> | null;
    pagination?: Pagination | null;
};

export type NamespaceSpec = {
    lifecycle?: string | null;
    owner?: string | null;
    contact?: string | null;
};

export type OrderBy = {
    attribute: string;
    direction?: string | null;
};

export type Pagination = {
    start?: number | null;
    limit?: number | null;
};

export type Stats = {
    namespaces?: number | null;
    actors?: number | null;
    items?: number | null;
    events?: number | null;
    feedbacks?: number | null;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type CreateNamespaceApiNamespacesPostData = {
    body: Namespace;
};

export type CreateNamespaceApiNamespacesPostResponse = Namespace;

export type CreateNamespaceApiNamespacesPostError = HTTPValidationError;

export type ReadNamespacesApiNamespacesGetData = {
    query?: {
        limit?: number;
        start?: number;
    };
};

export type ReadNamespacesApiNamespacesGetResponse = NamespaceList;

export type ReadNamespacesApiNamespacesGetError = HTTPValidationError;

export type ReadNamespaceApiNamespacesNamespaceNameGetData = {
    path: {
        namespace_name: string;
    };
};

export type ReadNamespaceApiNamespacesNamespaceNameGetResponse = Namespace;

export type ReadNamespaceApiNamespacesNamespaceNameGetError = HTTPValidationError;

export type UpdateNamespaceApiNamespacesNamespaceNamePutData = {
    body: Namespace;
    path: {
        namespace_name: string;
    };
};

export type UpdateNamespaceApiNamespacesNamespaceNamePutResponse = Namespace;

export type UpdateNamespaceApiNamespacesNamespaceNamePutError = HTTPValidationError;

export type DeleteNamespaceApiNamespacesNamespaceNameDeleteData = {
    path: {
        namespace_name: string;
    };
};

export type DeleteNamespaceApiNamespacesNamespaceNameDeleteResponse = unknown;

export type DeleteNamespaceApiNamespacesNamespaceNameDeleteError = HTTPValidationError;

export type QueryNamespacesApiNamespacesQueryPostData = {
    body: NamespaceQuery;
};

export type QueryNamespacesApiNamespacesQueryPostResponse = NamespaceList;

export type QueryNamespacesApiNamespacesQueryPostError = HTTPValidationError;

export type ReadActorsApiActorsGetData = {
    query?: {
        limit?: number;
        namespace_name?: string | null;
        offset?: number;
    };
};

export type ReadActorsApiActorsGetResponse = ActorsResult;

export type ReadActorsApiActorsGetError = HTTPValidationError;

export type ReadItemsApiItemsGetData = {
    query?: {
        limit?: number;
        namespace_name?: string | null;
        offset?: number;
    };
};

export type ReadItemsApiItemsGetResponse = ItemsResult;

export type ReadItemsApiItemsGetError = HTTPValidationError;

export type ReadEventsApiEventsGetData = {
    query?: {
        limit?: number;
        namespace_name?: string | null;
        offset?: number;
    };
};

export type ReadEventsApiEventsGetResponse = EventsResult;

export type ReadEventsApiEventsGetError = HTTPValidationError;

export type ReadFeedbacksApiFeedbacksGetData = {
    query?: {
        limit?: number;
        namespace_name?: string | null;
        offset?: number;
    };
};

export type ReadFeedbacksApiFeedbacksGetResponse = FeedbacksResult;

export type ReadFeedbacksApiFeedbacksGetError = HTTPValidationError;

export type GetStatsApiStatsGetData = {
    query?: {
        namespace_name?: string | null;
    };
};

export type GetStatsApiStatsGetResponse = Stats;

export type GetStatsApiStatsGetError = HTTPValidationError;

export type CreateActorApiNamespacesNamespaceNameActorsPostData = {
    body: ActorEntity;
    path: {
        namespace_name: string;
    };
};

export type CreateActorApiNamespacesNamespaceNameActorsPostResponse = ActorEntity;

export type CreateActorApiNamespacesNamespaceNameActorsPostError = HTTPValidationError;

export type ReadActorApiNamespacesNamespaceNameActorsActorNameGetData = {
    path: {
        actor_name: string;
        namespace_name: string;
    };
};

export type ReadActorApiNamespacesNamespaceNameActorsActorNameGetResponse = ActorEntity;

export type ReadActorApiNamespacesNamespaceNameActorsActorNameGetError = HTTPValidationError;

export type UpdateActorApiNamespacesNamespaceNameActorsActorNamePutData = {
    body: ActorEntity;
    path: {
        actor_name: string;
        namespace_name: string;
    };
};

export type UpdateActorApiNamespacesNamespaceNameActorsActorNamePutResponse = ActorEntity;

export type UpdateActorApiNamespacesNamespaceNameActorsActorNamePutError = HTTPValidationError;

export type DeleteActorApiNamespacesNamespaceNameActorsActorNameDeleteData = {
    path: {
        actor_name: string;
        namespace_name: string;
    };
};

export type DeleteActorApiNamespacesNamespaceNameActorsActorNameDeleteResponse = unknown;

export type DeleteActorApiNamespacesNamespaceNameActorsActorNameDeleteError = HTTPValidationError;

export type CreateItemApiNamespacesNamespaceNameItemsPostData = {
    body: ItemEntity;
    path: {
        namespace_name: string;
    };
};

export type CreateItemApiNamespacesNamespaceNameItemsPostResponse = ItemEntity;

export type CreateItemApiNamespacesNamespaceNameItemsPostError = HTTPValidationError;

export type ReadItemsApiNamespacesNamespaceNameItemsGetData = {
    path: {
        namespace_name: string | null;
    };
    query?: {
        limit?: number;
        offset?: number;
    };
};

export type ReadItemsApiNamespacesNamespaceNameItemsGetResponse = ItemsResult;

export type ReadItemsApiNamespacesNamespaceNameItemsGetError = HTTPValidationError;

export type ReadItemApiNamespacesNamespaceNameItemsItemNameGetData = {
    path: {
        item_name: string;
        namespace_name: string;
    };
};

export type ReadItemApiNamespacesNamespaceNameItemsItemNameGetResponse = ItemEntity;

export type ReadItemApiNamespacesNamespaceNameItemsItemNameGetError = HTTPValidationError;

export type UpdateItemApiNamespacesNamespaceNameItemsItemNamePutData = {
    body: ItemEntity;
    path: {
        item_name: string;
        namespace_name: string;
    };
};

export type UpdateItemApiNamespacesNamespaceNameItemsItemNamePutResponse = ItemEntity;

export type UpdateItemApiNamespacesNamespaceNameItemsItemNamePutError = HTTPValidationError;

export type DeleteItemApiNamespacesNamespaceNameItemsItemNameDeleteData = {
    path: {
        item_name: string;
        namespace_name: string;
    };
};

export type DeleteItemApiNamespacesNamespaceNameItemsItemNameDeleteResponse = unknown;

export type DeleteItemApiNamespacesNamespaceNameItemsItemNameDeleteError = HTTPValidationError;

export type CreateEventApiNamespacesNamespaceNameEventsPostData = {
    body: EventEntity;
    path: {
        namespace_name: string;
    };
};

export type CreateEventApiNamespacesNamespaceNameEventsPostResponse = EventEntity;

export type CreateEventApiNamespacesNamespaceNameEventsPostError = HTTPValidationError;

export type ReadEventsApiNamespacesNamespaceNameEventsGetData = {
    path: {
        namespace_name: string | null;
    };
    query?: {
        limit?: number;
        offset?: number;
    };
};

export type ReadEventsApiNamespacesNamespaceNameEventsGetResponse = EventsResult;

export type ReadEventsApiNamespacesNamespaceNameEventsGetError = HTTPValidationError;

export type ReadEventApiNamespacesNamespaceNameEventsEventNameGetData = {
    path: {
        event_name: string;
        namespace_name: string;
    };
};

export type ReadEventApiNamespacesNamespaceNameEventsEventNameGetResponse = EventEntity;

export type ReadEventApiNamespacesNamespaceNameEventsEventNameGetError = HTTPValidationError;

export type UpdateEventApiNamespacesNamespaceNameEventsEventNamePutData = {
    body: EventEntity;
    path: {
        event_name: string;
        namespace_name: string;
    };
};

export type UpdateEventApiNamespacesNamespaceNameEventsEventNamePutResponse = EventEntity;

export type UpdateEventApiNamespacesNamespaceNameEventsEventNamePutError = HTTPValidationError;

export type DeleteEventApiNamespacesNamespaceNameEventsEventNameDeleteData = {
    path: {
        event_name: string;
        namespace_name: string;
    };
};

export type DeleteEventApiNamespacesNamespaceNameEventsEventNameDeleteResponse = unknown;

export type DeleteEventApiNamespacesNamespaceNameEventsEventNameDeleteError = HTTPValidationError;

export type CreateFeedbackApiNamespacesNamespaceNameFeedbacksPostData = {
    body: FeedbackEntity;
    path: {
        namespace_name: string;
    };
};

export type CreateFeedbackApiNamespacesNamespaceNameFeedbacksPostResponse = FeedbackEntity;

export type CreateFeedbackApiNamespacesNamespaceNameFeedbacksPostError = HTTPValidationError;

export type ReadFeedbacksApiNamespacesNamespaceNameFeedbacksGetData = {
    path: {
        namespace_name: string | null;
    };
    query?: {
        limit?: number;
        offset?: number;
    };
};

export type ReadFeedbacksApiNamespacesNamespaceNameFeedbacksGetResponse = FeedbacksResult;

export type ReadFeedbacksApiNamespacesNamespaceNameFeedbacksGetError = HTTPValidationError;

export type ReadFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdGetData = {
    path: {
        namespace_name: string;
    };
    query: {
        feedback_name: string;
    };
};

export type ReadFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdGetResponse = FeedbackEntity;

export type ReadFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdGetError = HTTPValidationError;

export type UpdateFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdPutData = {
    body: FeedbackEntity;
    path: {
        namespace_name: string;
    };
    query: {
        feedback_name: string;
    };
};

export type UpdateFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdPutResponse = FeedbackEntity;

export type UpdateFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdPutError = HTTPValidationError;

export type DeleteFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdDeleteData = {
    path: {
        namespace_name: string;
    };
    query: {
        feedback_name: string;
    };
};

export type DeleteFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdDeleteResponse = unknown;

export type DeleteFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdDeleteError = HTTPValidationError;

export type GetStatsApiNamespacesNamespaceNameStatsGetData = {
    path: {
        namespace_name: string | null;
    };
};

export type GetStatsApiNamespacesNamespaceNameStatsGetResponse = Stats;

export type GetStatsApiNamespacesNamespaceNameStatsGetError = HTTPValidationError;

export type GetMinmaxApiNamespacesNamespaceNameReportsAverageMinmaxGetData = {
    path: {
        namespace_name: string;
    };
};

export type GetMinmaxApiNamespacesNamespaceNameReportsAverageMinmaxGetResponse = MinMax;

export type GetMinmaxApiNamespacesNamespaceNameReportsAverageMinmaxGetError = HTTPValidationError;

export type GetItemMinmaxApiNamespacesNamespaceNameReportsAverageItemItemNameGetData = {
    path: {
        item_name: string;
        namespace_name: string;
    };
};

export type GetItemMinmaxApiNamespacesNamespaceNameReportsAverageItemItemNameGetResponse = MinMax;

export type GetItemMinmaxApiNamespacesNamespaceNameReportsAverageItemItemNameGetError = HTTPValidationError;

export type GetAllItemsMinmaxApiNamespacesNamespaceNameReportsAverageItemsGetData = {
    path: {
        namespace_name: string | null;
    };
};

export type GetAllItemsMinmaxApiNamespacesNamespaceNameReportsAverageItemsGetResponse = Array<ItemMinMax>;

export type GetAllItemsMinmaxApiNamespacesNamespaceNameReportsAverageItemsGetError = HTTPValidationError;

export type GetRandomItemApiNamespacesNamespaceNameReportsRandomItemGetData = {
    path: {
        namespace_name: string | null;
    };
};

export type GetRandomItemApiNamespacesNamespaceNameReportsRandomItemGetResponse = ItemEntity;

export type GetRandomItemApiNamespacesNamespaceNameReportsRandomItemGetError = HTTPValidationError;

export type GetRandomItemsApiNamespacesNamespaceNameReportsRandomItemsGetData = {
    path: {
        namespace_name: string | null;
    };
    query?: {
        limit?: number;
    };
};

export type GetRandomItemsApiNamespacesNamespaceNameReportsRandomItemsGetResponse = Array<ItemEntity>;

export type GetRandomItemsApiNamespacesNamespaceNameReportsRandomItemsGetError = HTTPValidationError;

export type GetItemsWithMostEventsApiNamespacesNamespaceNameReportsMostEventsItemsGetData = {
    path: {
        namespace_name: string | null;
    };
    query?: {
        limit?: number;
        type_filter?: string | null;
    };
};

export type GetItemsWithMostEventsApiNamespacesNamespaceNameReportsMostEventsItemsGetResponse = Array<ItemWithEventCount>;

export type GetItemsWithMostEventsApiNamespacesNamespaceNameReportsMostEventsItemsGetError = HTTPValidationError;

export type GetItemsWithMostFeedbackApiNamespacesNamespaceNameReportsMostFeedbackItemsGetData = {
    path: {
        namespace_name: string | null;
    };
    query?: {
        limit?: number;
        type_filter?: string | null;
    };
};

export type GetItemsWithMostFeedbackApiNamespacesNamespaceNameReportsMostFeedbackItemsGetResponse = Array<ItemWithFeedbackCount>;

export type GetItemsWithMostFeedbackApiNamespacesNamespaceNameReportsMostFeedbackItemsGetError = HTTPValidationError;

export type GetItemsWithLatestEventsApiNamespacesNamespaceNameReportsLatestEventsItemsGetData = {
    path: {
        namespace_name: string | null;
    };
    query?: {
        actor_filter?: string | null;
        limit?: number;
        type_filter?: string | null;
        unique_items?: boolean;
    };
};

export type GetItemsWithLatestEventsApiNamespacesNamespaceNameReportsLatestEventsItemsGetResponse = Array<ItemWithEventDetails>;

export type GetItemsWithLatestEventsApiNamespacesNamespaceNameReportsLatestEventsItemsGetError = HTTPValidationError;

export type $OpenApiTs = {
    '/api/namespaces': {
        post: {
            req: CreateNamespaceApiNamespacesPostData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Namespace;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        get: {
            req: ReadNamespacesApiNamespacesGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': NamespaceList;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}': {
        get: {
            req: ReadNamespaceApiNamespacesNamespaceNameGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Namespace;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        put: {
            req: UpdateNamespaceApiNamespacesNamespaceNamePutData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Namespace;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        delete: {
            req: DeleteNamespaceApiNamespacesNamespaceNameDeleteData;
            res: {
                /**
                 * Successful Response
                 */
                '200': unknown;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/query': {
        post: {
            req: QueryNamespacesApiNamespacesQueryPostData;
            res: {
                /**
                 * Successful Response
                 */
                '200': NamespaceList;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/actors': {
        get: {
            req: ReadActorsApiActorsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ActorsResult;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/items': {
        get: {
            req: ReadItemsApiItemsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ItemsResult;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/events': {
        get: {
            req: ReadEventsApiEventsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': EventsResult;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/feedbacks': {
        get: {
            req: ReadFeedbacksApiFeedbacksGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': FeedbacksResult;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/stats': {
        get: {
            req: GetStatsApiStatsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Stats;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/actors': {
        post: {
            req: CreateActorApiNamespacesNamespaceNameActorsPostData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ActorEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/actors/{actor_name}': {
        get: {
            req: ReadActorApiNamespacesNamespaceNameActorsActorNameGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ActorEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        put: {
            req: UpdateActorApiNamespacesNamespaceNameActorsActorNamePutData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ActorEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        delete: {
            req: DeleteActorApiNamespacesNamespaceNameActorsActorNameDeleteData;
            res: {
                /**
                 * Successful Response
                 */
                '200': unknown;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/items': {
        post: {
            req: CreateItemApiNamespacesNamespaceNameItemsPostData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ItemEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        get: {
            req: ReadItemsApiNamespacesNamespaceNameItemsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ItemsResult;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/items/{item_name}': {
        get: {
            req: ReadItemApiNamespacesNamespaceNameItemsItemNameGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ItemEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        put: {
            req: UpdateItemApiNamespacesNamespaceNameItemsItemNamePutData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ItemEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        delete: {
            req: DeleteItemApiNamespacesNamespaceNameItemsItemNameDeleteData;
            res: {
                /**
                 * Successful Response
                 */
                '200': unknown;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/events': {
        post: {
            req: CreateEventApiNamespacesNamespaceNameEventsPostData;
            res: {
                /**
                 * Successful Response
                 */
                '200': EventEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        get: {
            req: ReadEventsApiNamespacesNamespaceNameEventsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': EventsResult;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/events/{event_name}': {
        get: {
            req: ReadEventApiNamespacesNamespaceNameEventsEventNameGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': EventEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        put: {
            req: UpdateEventApiNamespacesNamespaceNameEventsEventNamePutData;
            res: {
                /**
                 * Successful Response
                 */
                '200': EventEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        delete: {
            req: DeleteEventApiNamespacesNamespaceNameEventsEventNameDeleteData;
            res: {
                /**
                 * Successful Response
                 */
                '200': unknown;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/feedbacks': {
        post: {
            req: CreateFeedbackApiNamespacesNamespaceNameFeedbacksPostData;
            res: {
                /**
                 * Successful Response
                 */
                '200': FeedbackEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        get: {
            req: ReadFeedbacksApiNamespacesNamespaceNameFeedbacksGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': FeedbacksResult;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/feedbacks/{feedback_id}': {
        get: {
            req: ReadFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': FeedbackEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        put: {
            req: UpdateFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdPutData;
            res: {
                /**
                 * Successful Response
                 */
                '200': FeedbackEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
        delete: {
            req: DeleteFeedbackApiNamespacesNamespaceNameFeedbacksFeedbackIdDeleteData;
            res: {
                /**
                 * Successful Response
                 */
                '200': unknown;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/stats': {
        get: {
            req: GetStatsApiNamespacesNamespaceNameStatsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Stats;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/reports/average/minmax': {
        get: {
            req: GetMinmaxApiNamespacesNamespaceNameReportsAverageMinmaxGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': MinMax;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/reports/average/item/{item_name}': {
        get: {
            req: GetItemMinmaxApiNamespacesNamespaceNameReportsAverageItemItemNameGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': MinMax;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/reports/average/items': {
        get: {
            req: GetAllItemsMinmaxApiNamespacesNamespaceNameReportsAverageItemsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Array<ItemMinMax>;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/reports/random/item': {
        get: {
            req: GetRandomItemApiNamespacesNamespaceNameReportsRandomItemGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': ItemEntity;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/reports/random/items': {
        get: {
            req: GetRandomItemsApiNamespacesNamespaceNameReportsRandomItemsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Array<ItemEntity>;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/reports/most_events/items': {
        get: {
            req: GetItemsWithMostEventsApiNamespacesNamespaceNameReportsMostEventsItemsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Array<ItemWithEventCount>;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/reports/most_feedback/items': {
        get: {
            req: GetItemsWithMostFeedbackApiNamespacesNamespaceNameReportsMostFeedbackItemsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Array<ItemWithFeedbackCount>;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
    '/api/namespaces/{namespace_name}/reports/latest_events/items': {
        get: {
            req: GetItemsWithLatestEventsApiNamespacesNamespaceNameReportsLatestEventsItemsGetData;
            res: {
                /**
                 * Successful Response
                 */
                '200': Array<ItemWithEventDetails>;
                /**
                 * Validation Error
                 */
                '422': HTTPValidationError;
            };
        };
    };
};