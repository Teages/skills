# Class: SchedulerSystem

**`Advanced`**

The SchedulerSystem manages scheduled tasks with specific intervals.

## Implements

- [`System`](rendering.System.md)\<`null`\>

## Constructors

### Constructor

> **new SchedulerSystem**(): `SchedulerSystem`

#### Returns

`SchedulerSystem`

## Methods

### cancel()

> **cancel**(`id`): `void`

Cancels a scheduled task.

#### Parameters

##### id

`number`

The unique identifier of the task to cancel.

#### Returns

`void`

***

### init()

> **init**(): `void`

Initializes the scheduler system and starts the ticker.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)

***

### repeat()

> **repeat**(`func`, `duration`, `useOffset`): `number`

Schedules a repeating task.

#### Parameters

##### func

(`elapsed`) => `void`

The function to execute.

##### duration

`number`

The interval duration in milliseconds.

##### useOffset

`boolean` = `true`

this will spread out tasks so that they do not all run at the same time

#### Returns

`number`

The unique identifier for the scheduled task.
