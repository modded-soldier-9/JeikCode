import assert from 'node:assert/strict';
import { test } from 'node:test';
import { bakedAppVersion, formatAppVersionLabel, normalizeAppVersion } from './appVersion.ts';

test('normalizeAppVersion strips a leading v or V and trims whitespace', () => {
  assert.equal(normalizeAppVersion('v7.0.13'), '7.0.13');
  assert.equal(normalizeAppVersion('7.0.13'), '7.0.13');
  assert.equal(normalizeAppVersion('  V7.0.13  '), '7.0.13');
  assert.equal(normalizeAppVersion('  v1.0.0-beta.1  '), '1.0.0-beta.1');
});

test('normalizeAppVersion handles null, undefined, empty, and whitespace-only strings', () => {
  assert.equal(normalizeAppVersion(''), '');
  assert.equal(normalizeAppVersion('   '), '');
  assert.equal(normalizeAppVersion(undefined), '');
  assert.equal(normalizeAppVersion(null), '');
});

test('normalizeAppVersion only strips the leading v/V prefix', () => {
  assert.equal(normalizeAppVersion('v1.0.0-v2'), '1.0.0-v2');
  assert.equal(normalizeAppVersion('dev-v1.0.0'), 'dev-v1.0.0');
});

test('formatAppVersionLabel always formats with a single lowercase v prefix', () => {
  assert.equal(formatAppVersionLabel('7.0.13'), 'v7.0.13');
  assert.equal(formatAppVersionLabel('v7.0.13'), 'v7.0.13');
  assert.equal(formatAppVersionLabel('  V7.0.13  '), 'v7.0.13');
  assert.equal(formatAppVersionLabel('1.0.0-beta.1'), 'v1.0.0-beta.1');
});

test('formatAppVersionLabel returns empty string for null, undefined, or empty inputs', () => {
  assert.equal(formatAppVersionLabel(''), '');
  assert.equal(formatAppVersionLabel('   '), '');
  assert.equal(formatAppVersionLabel(undefined), '');
  assert.equal(formatAppVersionLabel(null), '');
});

test('bakedAppVersion returns normalized __APP_VERSION__ when defined, else empty string', () => {
  // When global __APP_VERSION__ is not defined
  assert.equal(bakedAppVersion(), '');

  // Temporarily define global __APP_VERSION__
  const original = (globalThis as unknown as Record<string, unknown>).__APP_VERSION__;
  try {
    (globalThis as unknown as Record<string, unknown>).__APP_VERSION__ = 'v1.2.3-test';
    assert.equal(bakedAppVersion(), '1.2.3-test');
  } finally {
    if (original === undefined) {
      delete (globalThis as unknown as Record<string, unknown>).__APP_VERSION__;
    } else {
      (globalThis as unknown as Record<string, unknown>).__APP_VERSION__ = original;
    }
  }
});
