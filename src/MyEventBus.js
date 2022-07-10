import EventBus from 'js-event-bus';

const eventBus = new EventBus();
export default eventBus;

export function startLoading() {
    eventBus.emit('loading', null, true);
}

export function stopLoading() {
    eventBus.emit('loading', null, false);
}

export function showError(err) {
    eventBus.emit('error', null, err);
}

export function resetError() {
    eventBus.emit('error', null, null);
}